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
            <li>
              <a href="${article.url}">
                ${article.data.title}
              </a>
            </li>
          `
        )}
      </ul>
    `
    return base(this, template, data)
  },
}
