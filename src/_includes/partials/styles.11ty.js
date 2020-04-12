const { html, css } = require('../../_lib/html')
const inline = require('../../_lib/inline')

const base64Font = inline('src/fonts/charter_regular-webfont_optimized')
const fontUrl = `data:font/woff2;charset=utf-8;base64,${base64Font}`
const indexCss = inline('src/css/styles.css')
const codeCss = inline('src/css/code.css')

// unicode-range: 0-9, A-Z, a-z
const inlineFontFace = `
  @font-face {
    font-family: Charter;
    src: url('${fontUrl}') format('woff2');
    font-style: normal;
    font-weight: normal;
    font-stretch: normal;
    font-display: block;
  }
`

function externalStyles() {
  return html`
    <style>
      ${css`
        ${inlineFontFace}
      `}
    </style>
    <link rel="stylesheet" href="/css/styles.css" />
    <link rel="stylesheet" href="/css/code.css" />
  `
}

function inlineStyles() {
  return html`
    <style>
      ${css`
      ${inlineFontFace}
      ${indexCss}
      ${codeCss}
    `.min()}
    </style>
  `
}

module.exports = () => (process.env.DEV ? externalStyles() : inlineStyles())
