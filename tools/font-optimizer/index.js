const fs = require('fs')
const path = require('path')
const util = require('util')
const Buffer = require('buffer').Buffer
const execFile = util.promisify(require('child_process').execFile)

const fetch = require('node-fetch')
const unzipper = require('unzipper')
const Fontmin = require('fontmin')
const wawoff = require('wawoff2')

const CHARACTERS = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-,–().—'"’ :;`

async function download(url, fileName) {
  return fetch(url).then((response) => {
    const destination = fs.createWriteStream(fileName)
    return new Promise((resolve) => {
      response.body.pipe(destination)
      destination.on('finish', resolve)
    })
  })
}

async function unzipFile(archive, output) {
  return unzipper.Open.file(archive).then((d) => d.extract({ path: output }))
}

async function optimizeFont(fontPath, destination) {
  const fontmin = new Fontmin()
    .use(
      Fontmin.glyph({
        text: CHARACTERS,
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

async function processCharterFont() {
  const charterFolderName = 'Charter 210112'
  const woffFolderName = 'WOFF2 format (best for web)'
  const subforlderName = 'Charter'
  const charterBoldFileName = 'charter_bold.woff2'
  const charterItalicFileName = 'charter_italic.woff2'
  const charterRegularFileName = 'charter_regular.woff2'
  const ttfFolderName = 'TTF format (best for Windows)'
  const pathToWoff = path.join(
    __dirname,
    charterFolderName,
    woffFolderName,
    subforlderName
  )

  console.log('Downloading font Charter')
  try {
    await download(
      'https://practicaltypography.com/fonts/Charter%20210112.zip',
      'charter.zip'
    )
  } catch (e) {
    console.error(e)
  }

  console.log('Unziping downloaded archive with font Charter')
  await unzipFile('charter.zip', path.join(__dirname, '.'))

  console.log('Optimizing ttf font')
  try {
    await optimizeFont(
      path.join(
        __dirname,
        charterFolderName,
        ttfFolderName,
        subforlderName,
        'Charter Regular.ttf'
      ),
      __dirname
    )
  } catch (e) {
    console.error(e)
  }

  console.log('Converting optimized ttf font to woff2')
  await convertToWoff2(
    path.join(__dirname, 'Charter Regular.ttf'),
    path.join(__dirname, 'charter_regular-optimized.woff2')
  )

  console.log('Create base64 version from optimized woff2')
  await base64FromWoff2(
    path.join(__dirname, 'charter_regular-optimized.woff2'),
    path.join(__dirname, 'charter_regular-optimized')
  )

  fs.copyFileSync(
    path.join(pathToWoff, charterRegularFileName),
    path.join(__dirname, charterRegularFileName)
  )
  fs.copyFileSync(
    path.join(pathToWoff, charterItalicFileName),
    path.join(__dirname, charterItalicFileName)
  )
  fs.copyFileSync(
    path.join(pathToWoff, charterBoldFileName),
    path.join(__dirname, charterBoldFileName)
  )
}

async function processRalewayFont() {
  console.log('Downloading font Raleway')
  // Manually requested `https://fonts.googleapis.com/css?family=Raleway:600&text=${CHARACTERS}`
  // And copy pasted the resulting url
  try {
    const fontFileUrl =
      'https://fonts.gstatic.com/l/font?kit=1Ptrg8zYS_SKggPNwPIsaqRdVNC84nM7zY2hLoUNFgNo9_mdWBt8wUNLmM3QMzzF1VBMXiasStu5cLqxWGNgjWNw5gaWlRkInoYN1xmDxvjSX7W7U3XMVXAjNb0MRMp6TqPO1w&skey=484edb0fdce88a64&v=v14'
    await download(fontFileUrl, 'raleway_semibold-optimized.woff2')
  } catch (e) {
    console.error(e)
  }
}

async function main() {
  console.log()
  console.log('Process font Charter')
  console.log('--------------------')
  await processCharterFont()

  console.log()
  console.log('Process font Raleway')
  console.log('--------------------')
  await processRalewayFont()
}

main()
