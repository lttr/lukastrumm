const html = require('../_lib/html')
const { postInline } = require('../_includes/partials/postSnippets.11ty')

module.exports = {
  data: {
    title: 'Articles',
    permalink: '/articles/',
  },

  render(data) {
    return html`
      <h1>Articles</h1>
      <ul>
        ${data.collections.articles.map(
          (article) => html`
            <li>
              ${postInline(article.data)}
            </li>
          `
        )}
      </ul>
    `
  },
}
