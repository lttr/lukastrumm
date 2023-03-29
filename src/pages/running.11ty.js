const { html } = require('../_lib/html')
const { formatDate } = require('../_lib/formatDate')

module.exports = {
  data: {
    layout: 'layouts/running',
    title: 'Running',
    permalink: '/running/',
  },

  render(data) {
    return html`
      <img src="/images/behvevode.jpg" alt="Foot" />

      <p>
        <a href="https://www.komoot.com/user/729131540685">My Komoot profile</a>
      </p>

      <iframe
        src="https://www.komoot.com/user/729131540685/embed"
        width="100%"
        height="580"
        frameborder="0"
        scrolling="no"
      ></iframe>
    `
  },
}
