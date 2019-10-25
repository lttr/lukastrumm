const { html, base } = require('../_includes/base.11ty')

module.exports = {
  data: {
    title: 'Articles',
    permalink: '/articles/',
  },

  render(data) {
    const template = html`
      <h1>Articles</h1>
      <ul>
        ${data.collections.articles.map(
          article => html`
            <a href="${article.url}">
              <li>${article.data.title}</li>
            </a>
          `
        )}
      </ul>
    `
    return base(this, template, data)
  },
}
