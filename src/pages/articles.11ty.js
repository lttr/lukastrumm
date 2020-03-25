const html = require('viperhtml').wire()

const base = require('../_includes/layouts/base.11ty')
const { postInline } = require('../_includes/partials/postSnippets.11ty')

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
          (article) => html`
            <li>
              ${postInline(article.data)}
            </li>
          `
        )}
      </ul>
    `
    return base(this, template, data)
  },
}
