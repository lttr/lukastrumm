const inline = require('../../_lib/inline')
const { html, raw, js } = require('../../_lib/html')

const meta = require('../partials/meta.11ty')
const klipse = require('../partials/klipse.11ty')
const mermaid = require('../partials/mermaid.11ty')
const header = require('../partials/header.11ty')
const footer = require('../partials/footer.11ty')
const styles = require('../partials/styles.11ty')

module.exports = function base(eleventy, content, data) {
  const hasCodeBlock = content.includes('class="language-')
  const hasMermaid = content.includes('class="mermaid')
  const hasRunnableCodeBlock = content.includes('class="klipse')

  return html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        ${meta(eleventy, data)}
        <script>
          ${js`${inline('src/js/load-fonts.js')}`.min()}
        </script>
        ${styles()} ${hasMermaid ? mermaid(eleventy) : null}
      </head>
      <body>
        <div class="page-wrapper">
          ${header(eleventy, data)}
          <main>
            ${content}
          </main>
          ${footer(eleventy, data)}
        </div>
        <script>
          ${hasCodeBlock
            ? js`${inline('src/js/enable-copy-to-clipboard.js')}`.min()
            : null}
          ${hasRunnableCodeBlock
            ? js`${inline('src/js/enable-klipse.js')}`
            : null}
        </script>
        ${hasRunnableCodeBlock ? raw`${klipse(eleventy)}` : null}
      </body>
    </html>
  `.toString()
}
