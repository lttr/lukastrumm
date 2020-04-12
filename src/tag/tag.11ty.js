const html = require('../_lib/html')
const { postInline } = require('../_includes/partials/postSnippets.11ty')

module.exports = {
  data: {
    layout: 'layouts/page',
    pagination: {
      data: 'collections',
      size: 1,
      addAllPagesToCollections: true,
      // filter out all 'system' tags
      filter: ['all', 'tagList', 'nav', 'articles', 'posts', 'notes', 'blog'],
    },
    permalink: (data) => `/tag/${data.pagination.items[0]}/`,
  },

  render(data) {
    const tag = data.pagination.items[0]
    const tagCollection = data.collections[tag]
    tagCollection.reverse() // last posts first
    return html`
      <p></p>
      <p>
        <strong>tag</strong>
        <span class="tag-badge">${tag}</span>
      </p>
      <ul>
        ${tagCollection.map((item) => {
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
  },
}
