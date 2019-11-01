const { html, base } = require('../_includes/layouts/base.11ty')
const { postInline } = require('../_includes/partials/postInline.11ty')

module.exports = {
  data: {
    pagination: {
      data: 'collections',
      size: 1,
      addAllPagesToCollections: true,
      filter: ['all', 'tagList', 'nav', 'articles', 'posts', 'notes', 'blog'],
    },
  },

  render(data) {
    const tag = data.pagination.items[0]
    const template = html`
      <h1>Tagged ${tag}</h1>
      <ul>
        ${data.collections[tag].map(item => {
          return html`
            <li>
              ${postInline(item.data)}
            </li>
          `
        })}
      </ul>
      <p>
        <a href="/tags">&laquo; all tags</a>
      </p>
    `
    return base(this, template, data)
  },
}
