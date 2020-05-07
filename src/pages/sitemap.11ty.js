const html = require('../_lib/html')

module.exports = {
  data: {
    permalink: '/sitemap/',
  },

  render(data) {
    return html`
      <h1>Sitemap</h1>
      <ul>
        ${data.collections.all
          .filter(
            (page) => !page.url.startsWith('/_') && !page.url.endsWith('.json')
          )
          .map(({ url, date }) => ({ url, date }))
          .sort((a, b) => a.url.localeCompare(b.url))
          .map(({ url, date }) => {
            return html`
              <li>
                <a href="${this.url(url)}">${this.url(url)}</a>
                <span class="article-date"
                  >${date.toISOString().slice(0, 10)}</span
                >
              </li>
            `
          })}
      </ul>
    `
  },
}
