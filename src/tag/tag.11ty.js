const { html, base } = require('../_includes/layouts/base.11ty')
const { postInline } = require('../_includes/partials/postSnippets.11ty')

module.exports = {
  data: {
    pagination: {
      data: 'collections',
      size: 1,
      addAllPagesToCollections: true,
      // filter out all 'system' tags
      filter: ['all', 'tagList', 'nav', 'articles', 'posts', 'notes', 'blog'],
    },
    permalink: data => `/tag/${data.pagination.items[0]}/`,
  },

  render(data) {
    const tag = data.pagination.items[0]
    const template = html`
      <p></p>
      <p>
        <strong>tag</strong>
        <span class="tag-badge">${tag}</span>
      </p>
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
