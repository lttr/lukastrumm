const html = require('viperhtml').wire()

const base = require('../_includes/layouts/base.11ty')
const { postInline } = require('../_includes/partials/postSnippets.11ty')

module.exports = {
  data: {
    title: 'Blog',
    permalink: '/blog/',
  },

  render(data) {
    const template = html`
      <h1>Blog</h1>
      <ul>
        ${data.collections.blog.map(
          blog => html`
            <li>
              ${postInline(blog.data)}
            </li>
          `
        )}
      </ul>
    `
    return base(this, template, data)
  },
}
