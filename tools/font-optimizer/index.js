const fs = require('fs')
const path = require('path')
const util = require('util')
const Buffer = require('buffer').Buffer
const execFile = util.promisify(require('child_process').execFile)

const fetch = require('node-fetch')
const unzipper = require('unzipper')
const Fontmin = require('fontmin')
const wawoff = require('wawoff2')

async function download(url) {
  const splittedUrl = url.split('/')
  const fileName = splittedUrl[splittedUrl.length - 1]
  return fetch(url).then(response => {
    const destination = fs.createWriteStream(fileName)
    return new Promise(resolve => {
      response.body.pipe(destination)
      destination.on('finish', resolve)
    })
  })
}

async function unzipFile(archive, output) {
  return unzipper.Open.file(archive).then(d => d.extract({ path: output }))
}

async function optimizeFont(fontPath, destination) {
  const fontmin = new Fontmin()
    .use(
      Fontmin.glyph({
        text: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
        hinting: false,
      })
    )
    .src(fontPath)
    .dest(destination)

  return new Promise((resolve, reject) => {
    fontmin.run((err, files) => {
      if (err) reject(err)
      resolve()
    })
  })
}

async function convertToWoff2(src, dest) {
  await execFile('node', [
    path.join(__dirname, './node_modules/wawoff2/bin/woff2_compress.js'),
    src,
    dest,
  ])
}

async function base64FromWoff2(src, dest) {
  const woff2 = await fs.promises.readFile(src)
  await fs.promises.writeFile(dest, Buffer.from(woff2).toString('base64'))
}

async function main() {
  console.log('Downloading font Charter')
  await download('https://practicaltypography.com/fonts/charter.zip')

  console.log('Unziping downloaded archive')
  await unzipFile('charter.zip', path.join(__dirname, '.'))

  console.log('Optimizing ttf font')
  await optimizeFont(
    path.join(__dirname, 'charter', 'webfonts', 'charter_regular-webfont.ttf'),
    path.join(__dirname, 'charter', 'optimized')
  )

  console.log('Converting optimized ttf font to woff2')
  await convertToWoff2(
    path.join(__dirname, 'charter', 'optimized', 'charter_regular-webfont.ttf'),
    path.join(__dirname, 'charter_regular-webfont_optimized.woff2')
  )

  console.log('Converting regular ttf font to woff2')
  await convertToWoff2(
    path.join(__dirname, 'charter', 'webfonts', 'charter_regular-webfont.ttf'),
    path.join(__dirname, 'charter_regular-webfont.woff2')
  )

  console.log('Converting italic ttf font to woff2')
  await convertToWoff2(
    path.join(__dirname, 'charter', 'webfonts', 'charter_italic-webfont.ttf'),
    path.join(__dirname, 'charter_italic-webfont.woff2')
  )

  console.log('Create base64 version from optimized woff2')
  await base64FromWoff2(
    path.join(__dirname, 'charter_regular-webfont_optimized.woff2'),
    path.join(__dirname, 'charter_regular-webfont_optimized')
  )
}

main()
