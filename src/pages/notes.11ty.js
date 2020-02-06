const { html, base } = require('../_includes/layouts/base.11ty')
const { postInline } = require('../_includes/partials/postSnippets.11ty')

module.exports = {
  data: {
    title: 'Notes',
    permalink: '/notes/',
  },

  render(data) {
    const template = html`
      <h1>Notes</h1>
      <ul id="notes">
        ${data.collections.notes.map(
          item => html`
            <li>
              ${postInline(item.data)}
              ${Array.isArray(item.data.tags)
                ? item.data.tags.map(tag => {
                    const url = `/tag/${tag}`
                    return html`
                      <a href="${url}" class="tag-badge">${tag}</a>
                    `
                  })
                : ''}
            </li>
          `
        )}
      </ul>
    `
    return base(this, template, data)
  },
}
