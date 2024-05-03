const html = require("../../_lib/html")

module.exports = (eleventy) => html`
  <link
    rel="stylesheet"
    href="${eleventy.url("/css/codemirror.css")}"
    media="non-existing"
    onload="this.media='all'"
  />
  <script
    async
    src="https://cdn.jsdelivr.net/npm/klipse@7.9.6/dist/klipse_plugin.min.js"
  ></script>
`
