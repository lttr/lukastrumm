const { formatDate } = require('../_lib/formatDate')
const childProcess = require('child_process')

module.exports = {
  data: {
    title: 'About this site',
    permalink: '/about-this-site/',
    templateEngineOverride: '11ty.js,md',
  },

  render() {
    const lastBuild = formatDate(new Date())
    const commitHash = childProcess.execSync('git rev-parse HEAD')
    const shortHash = commitHash.slice(0, 7)
    return `
_Last build: ${lastBuild} /[${shortHash}](https://github.com/lttr/lukastrumm/commit/${commitHash})/_

## Technology

- [Eleventy](https://11ty.dev)

## Site structure

[Sitemap](/sitemap)

## About me

You can read a few paragraphs about me [here](/about).
`
  },
}
