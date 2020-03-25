const html = require('viperhtml').wire()

module.exports = (eleventy) => html`
  <script
    defer
    src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"
  ></script>
  <script defer src="${eleventy.url('/js/enable-mermaid.js')}"></script>
`
