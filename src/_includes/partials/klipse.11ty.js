const html = require('viperhtml').wire()

module.exports = (eleventy) => html`
  <link rel="stylesheet" href="${eleventy.url('/css/codemirror.css')}" />
  <script defer src="${eleventy.url('/js/enable-klipse.js')}"></script>
  <script
    defer
    src="https://cdn.jsdelivr.net/npm/klipse@7.8.3/dist/klipse_plugin.min.js"
  ></script>
`
