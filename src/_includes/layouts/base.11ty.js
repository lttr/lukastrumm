const html = require('viperhtml').wire()

const meta = require('../partials/meta.11ty')
const clipboard = require('../partials/clipboard.11ty')
const klipse = require('../partials/klipse.11ty')
const mermaid = require('../partials/mermaid.11ty')
const header = require('../partials/header.11ty')
const footer = require('../partials/footer.11ty')
const criticalStyles = require('../partials/criticalStyles.11ty')
const linkedStyles = require('../partials/linkedStyles.11ty')

module.exports = function base(eleventy, content, data) {
  const hasCodeBlock = content.includes('class="language')
  const hasMermaid = content.includes('class="mermaid')
  const hasRunnableCodeBlock = content.includes('class="klipse')

  return html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        ${meta(eleventy, data)} ${{ html: criticalStyles() }} ${linkedStyles()}
        ${hasCodeBlock ? clipboard(eleventy) : null}
        ${hasMermaid ? mermaid(eleventy) : null}
        ${hasRunnableCodeBlock ? klipse(eleventy) : null}
      </head>
      <body>
        <div class="page-wrapper">
          ${header(eleventy, data)}
          <main>
            ${{ html: content }}
          </main>
          ${footer(eleventy, data)}
        </div>
      </body>
    </html>
  `
}
