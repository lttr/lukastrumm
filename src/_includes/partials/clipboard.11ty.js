const html = require('viperhtml').wire()

module.exports = (eleventy) => html`
  <script
    defer
    src="https://cdn.jsdelivr.net/npm/clipboard@2/dist/clipboard.min.js"
  ></script>
  <script defer src="${eleventy.url('/js/code-to-clipboard.js')}"></script>
`
