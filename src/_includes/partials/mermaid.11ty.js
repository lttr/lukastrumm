const html = require("../../_lib/html")

module.exports = (eleventy) =>
  process.env.DEV
    ? html`
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"
        ></script>
        <script defer src="${eleventy.url("/js/enable-mermaid.js")}"></script>
      `
    : null
