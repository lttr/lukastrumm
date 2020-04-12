const html = require('../../_lib/html')

module.exports = (eleventy) => html`
  <link
    rel="stylesheet"
    href="${eleventy.url('/css/codemirror.css')}"
    media="non-existing"
    onload="this.media='all'"
  />
  <script async src="${eleventy.url('/js/klipse_plugin.min.js')}"></script>
  <script async src="${eleventy.url('/js/javascript.inc.js')}"></script>
`
