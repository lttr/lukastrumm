const html = require('../_lib/html')
const { postInline } = require('../_includes/partials/postSnippets.11ty')

module.exports = {
  data: {
    title: 'Blog',
    permalink: '/blog/',
  },

  render(data) {
    return html`
      <ul>
        ${data.collections.blog.map(
          (blog) => html`
            <li>
              ${postInline(blog.data)}
            </li>
          `
        )}
      </ul>
    `
  },
}
