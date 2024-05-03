const html = require("../_lib/html")
const {
  postInline,
  tags,
  getCategory,
} = require("../_includes/partials/postSnippets.11ty")

module.exports = {
  data: {
    layout: "layouts/page",
    pagination: {
      data: "collections",
      size: 1,
      addAllPagesToCollections: true,
      // filter out all 'system' tags
      filter: ["all", "tagList", "nav", "posts", "notes", "blog"],
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
        ${tagCollection.map(
          (item) => html`
            <li>
              <span class="category">${getCategory(item.data.page.url)}</span>
              ${postInline(item.data)}${Array.isArray(item.data.tags)
                ? tags(item.data.tags)
                : ""}
            </li>
          `,
        )}
      </ul>
      <p>
        <a href="/tags">&laquo; all tags</a>
      </p>
    `
  },
}
