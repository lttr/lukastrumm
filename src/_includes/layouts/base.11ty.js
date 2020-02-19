const viperhtml = require('viperhtml')
const githubIcon = require('simple-icons/icons/github')
const goodreadsIcon = require('simple-icons/icons/goodreads')
const twitterIcon = require('simple-icons/icons/twitter')
const header = require('../partials/header.11ty')

const html = viperhtml.wire()

function base(self, content, data) {
  const { metadata, title } = data
  return html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${title}${title ? ' - ' : ''}${metadata.title}</title>
        <meta name="Description" content="${metadata.description}" />

        <link
          href="https://fonts.googleapis.com/css?family=Libre+Baskerville|Raleway:600|Fira+Mono&display=swap"
          rel="stylesheet"
        />

        <link rel="stylesheet" href="${self.url('/css/index.css')}" />
        <link rel="stylesheet" href="/css/code.css" />
        <link
          rel="alternate"
          href="${self.url(metadata.feed.path)}"
          type="application/atom+xml"
          title="${metadata.title}"
        />
        <script defer src="${self.url('/js/index.js')}"></script>
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/clipboard@2/dist/clipboard.min.js"
        ></script>
        <script defer src="${self.url('/js/code-to-clipboard.js')}"></script>

        <!-- klipse start -->
        <link rel="stylesheet" href="${self.url('/css/codemirror.css')}" />
        <script>
          window.klipse_settings = {
            selector_eval_js: '.klipse-eval-js', // css selector for the html elements you want to klipsify
          }
        </script>
        <script defer src="${self.url('/js/enable-klipse.js')}"></script>
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/klipse@7.8.3/dist/klipse_plugin.min.js"
        ></script>
        <!-- klipse end -->
        <!-- mermaid start -->
        <script
          defer
          src="https://unpkg.com/mermaid/dist/mermaid.min.js"
        ></script>
        <script defer>
          document.addEventListener('DOMContentLoaded', () => {
            mermaid.initialize({
              startOnLoad: true,
              theme: 'neutral',
              nodeSpacing: 40,
              rankSpacing: 30,
            })
            document.querySelectorAll('.mermaid').forEach(element => {
              element.hidden = false
            })
          })
        </script>
        <!-- mermaid end -->
      </head>
      <body>
        <div class="page-wrapper">
          ${header(html, self, data)}

          <main>
            ${{ html: content }}
          </main>

          <footer>
            <a href="https://github.com/lttr" aria-label="Github - lttr">
              <span class="social-icon">${{ html: githubIcon.svg }}</span>
            </a>
            <a
              href="https://www.goodreads.com/user/show/64207622-luk-trumm"
              aria-label="Goodreads - lukastrumm"
            >
              <span class="social-icon">${{ html: goodreadsIcon.svg }}</span>
            </a>
            <a
              href="https://twitter.com/lukastrumm"
              aria-label="Twitter - lukastrumm"
            >
              <span class="social-icon">${{ html: twitterIcon.svg }}</span>
            </a>
            <span class="copyright">
              Lukas Trumm &copy; ${new Date().getFullYear()}
            </span>
          </footer>
        </div>
        <script
          src="//instant.page/3.0.0"
          type="module"
          defer
          integrity="sha384-OeDn4XE77tdHo8pGtE1apMPmAipjoxUQ++eeJa6EtJCfHlvijigWiJpD7VDPWXV1"
        ></script>
      </body>
    </html>
  `
}

module.exports = {
  html,
  base,
}
