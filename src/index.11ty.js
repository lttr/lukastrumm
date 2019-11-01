const { html, base } = require('./_includes/layouts/base.11ty')
const { postInline } = require('./_includes/partials/postInline.11ty')

module.exports = {
  render(data) {
    const { collections } = data
    const template = html`
      <h2>Articles</h2>
      <ul>
        ${collections.articles.map(
          item => html`
            <li>
              ${postInline(item.data)}
            </li>
          `
        )}
      </ul>
      <h2>Blog posts</h2>
      <ul>
        ${collections.blog.map(
          item => html`
            <li>
              ${postInline(item.data)}
            </li>
          `
        )}
      </ul>
      <h2>Notes</h2>
      <ul>
        ${collections.notes.map(
          item => html`
            <li>
              ${postInline(item.data)}
            </li>
          `
        )}
      </ul>
    `

    return base(this, template, data)
  },
}
