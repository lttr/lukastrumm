const { html, css } = require('../../_lib/html')
const inline = require('../../_lib/inline')

const indexCss = inline('./src/css/styles.css')
const codeCss = inline('./src/css/code.css')

function externalStyles() {
  return html`
    <link rel="stylesheet" href="/css/styles.css" />
    <link rel="stylesheet" href="/css/code.css" />
  `
}

function inlineStyles() {
  return html`
    <style>
      ${css`
        ${indexCss}
        ${codeCss}
      `.min()}
    </style>
  `
}

module.exports = () => (process.env.DEV ? externalStyles() : inlineStyles())
