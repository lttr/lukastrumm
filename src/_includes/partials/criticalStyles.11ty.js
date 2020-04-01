const inline = require('../helpers/inline')

const base64Font = inline('../../fonts/charter_regular-webfont_optimized')
const fontUrl = `data:font/woff2;charset=utf-8;base64,${base64Font}`
const indexCss = inline('../../css/styles.css')
const codeCss = inline('../../css/code.css')

// unicode-range: 0-9, A-Z, a-z
module.exports = () => `
@font-face {
  font-family: Charter;
  src: url('${fontUrl}') format('woff2');
  font-style: normal;
  font-weight: normal;
  font-stretch: normal;
  font-display: block;
}
${indexCss}
${codeCss}
`
