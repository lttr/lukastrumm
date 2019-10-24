const viperhtml = require('viperhtml')
const githubIcon = require('simple-icons/icons/github')
const goodreadsIcon = require('simple-icons/icons/goodreads')
const twitterIcon = require('simple-icons/icons/twitter')

const html = viperhtml.wire()

function base(self, content, data) {
  const { metadata, collections, page, title } = data
  return html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${title}${title ? ' - ' : ''}${metadata.title}</title>
        <meta name="Description" content="${metadata.description}" />
        <link rel="stylesheet" href="${self.url('/css/index.css')}" />
        <link
          href="https://fonts.googleapis.com/css?family=Libre+Baskerville|Raleway:800&display=swap"
          rel="stylesheet"
        />
        <link href="/css/prism-duotone-light.css" rel="stylesheet" />
        <link
          rel="alternate"
          href="${self.url(metadata.feed.path)}"
          type="application/atom+xml"
          title="${metadata.title}"
        />
      </head>
      <body>
        <div class="page-wrapper">
          <header>
            <h1>
              <a href="${self.url('/')}">${metadata.title}</a>
            </h1>
            <nav>
              <ul>
                ${collections.nav.map(item => {
                  const isActive = page.url.startsWith(item.data.permalink)
                  return html`
                    <li>
                      <a
                        class="${isActive ? 'is-active' : ''}"
                        href="${self.url(item.url)}"
                        >${item.data.title}</a
                      >
                    </li>
                  `
                })}
              </ul>
            </nav>
          </header>

          <main>
            ${{ html: content }}
          </main>

          <footer class="margins-off">
            <a href="https://github.com/lttr">
              <span class="social-icon">${{ html: githubIcon.svg }}</span>
            </a>
            <a href="https://www.goodreads.com/user/show/64207622-luk-trumm">
              <span class="social-icon">${{ html: goodreadsIcon.svg }}</span>
            </a>
            <a href="https://twitter.com/lukastrumm">
              <span class="social-icon">${{ html: twitterIcon.svg }}</span>
            </a>
            <span class="copyright">
              Lukas Trumm &copy; ${new Date().getFullYear()}
            </span>
          </footer>
        </div>
      </body>
    </html>
  `
}

module.exports = {
  html,
  base,
}
