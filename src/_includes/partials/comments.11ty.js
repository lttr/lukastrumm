const { html } = require('../../_lib/html')

function comments() {
  return html`
    <script
      src="https://giscus.app/client.js"
      data-repo="lttr/lukastrumm"
      data-repo-id="MDEwOlJlcG9zaXRvcnkxMTczNTk5NTc="
      data-category="Announcements"
      data-category-id="DIC_kwDOBv7FVc4CUSrt"
      data-mapping="title"
      data-strict="0"
      data-reactions-enabled="1"
      data-emit-metadata="0"
      data-input-position="bottom"
      data-theme="https://lukastrumm.com/css/giscus-custom.css"
      data-lang="en"
      data-loading="lazy"
      crossorigin="anonymous"
      async
    ></script>
  `
}

module.exports = comments
