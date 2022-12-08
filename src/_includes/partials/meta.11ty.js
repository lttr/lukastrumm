const html = require('../../_lib/html')

// Info about the analytics script below: https://plausible.io/docs/proxy/guides/netlify

module.exports = (eleventy, data) => html`
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="Description" content="${data.metadata.description}" />

  <title>${data.title}${data.title ? ' - ' : ''}${data.metadata.title}</title>

  <link
    rel="alternate"
    href="${eleventy.url(data.metadata.feedPath)}"
    type="application/atom+xml"
    title="${data.metadata.title}"
  />

  <link rel="preconnect" href="https://cdn.jsdelivr.net/" />
  <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
  <link rel="preconnect" href="https://viebel.github.io" />
  <link rel="preconnect" href="https://www.google-analytics.com" />

  <script
    defer
    data-domain="lukastrumm.com"
    data-api="/elbisualp/api/event"
    src="/elbisualp/js/script.js"
  ></script>
`
