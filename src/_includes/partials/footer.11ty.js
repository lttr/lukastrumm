const { html, raw } = require('../../_lib/html')

const { siGithub } = require('simple-icons/icons')
const { siGoodreads } = require('simple-icons/icons')
const { siTwitter } = require('simple-icons/icons')

module.exports = () =>
  html`
    <footer class="page-footer">
      <a href="https://github.com/lttr" aria-label="Github - lttr">
        <span class="social-icon">${raw`${siGithub.svg}`}</span>
      </a>
      <a
        href="https://www.goodreads.com/user/show/64207622-luk-trumm"
        aria-label="Goodreads - lukastrumm"
      >
        <span class="social-icon">${raw`${siGoodreads.svg}`}</span>
      </a>
      <a
        href="https://twitter.com/lukastrumm"
        aria-label="Twitter - lukastrumm"
      >
        <span class="social-icon">${raw`${siTwitter.svg}`}</span>
      </a>
      <span class="copyright">
        Lukas Trumm &copy; ${new Date().getFullYear()}
      </span>
      <a class="copyright" href="/about-this-site">About this site</a>
    </footer>
  `
