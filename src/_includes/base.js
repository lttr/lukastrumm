const viperhtml = require('viperhtml')
const html = viperhtml.wire()

function base(that, content, metadata, collections, page, templateClass) {
  return html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${metadata.title}</title>
        <meta name="Description" content="${metadata.description}" />
        <link rel="stylesheet" href="${that.url('/css/index.css')}" />
        <link
          rel="alternate"
          href="${that.url(metadata.feed.path)}"
          type="application/atom+xml"
          title="${metadata.title}"
        />
      </head>
      <body>
        <header>
          <h1 class="home"><a href="${that.url('/')}">${metadata.title}</a></h1>
          <ul class="nav">
            ${collections.nav.map(item => {
              let classList = 'nav-item'
              classList +=
                item.url === page.url ? 'nav-item nav-item-active' : ''
              return html`
                <li class="${classList}">
                  <a href="${that.url(item.url)}">${item.data.navtitle}</a>
                </li>
              `
            })}
          </ul>
        </header>

        <main class="${templateClass}">
          <div class="warning">
            <ol>
              <li>
                Edit the <code>_data/metadata.json</code> with your blog’s
                information.
              </li>
              <li>
                (Optional) Edit <code>.eleventy.js</code> with your
                configuration preferences.
              </li>
              <li>
                Delete this message from
                <code>_includes/layouts/base.njk</code>.
              </li>
            </ol>
            <p>
              <em
                >This is an
                <a href="https://www.11ty.io/">Eleventy project</a> created from
                the
                <a href="https://github.com/11ty/eleventy-base-blog"
                  ><code>eleventy-base-blog</code> repo</a
                >.</em
              >
            </p>
          </div>

          ${content}
        </main>

        <footer></footer>

        <!-- Current page: {{ page.url | url }} -->
      </body>
    </html>
  `
}

module.exports = {
  html,
  base,
}
