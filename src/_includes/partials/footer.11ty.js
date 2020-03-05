const html = require('viperhtml').wire()

const githubIcon = require('simple-icons/icons/github')
const goodreadsIcon = require('simple-icons/icons/goodreads')
const twitterIcon = require('simple-icons/icons/twitter')

module.exports = () => html`
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
    <a href="https://twitter.com/lukastrumm" aria-label="Twitter - lukastrumm">
      <span class="social-icon">${{ html: twitterIcon.svg }}</span>
    </a>
    <span class="copyright">
      Lukas Trumm &copy; ${new Date().getFullYear()}
    </span>
  </footer>
`
