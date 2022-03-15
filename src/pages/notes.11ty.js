const html = require('../_lib/html')
const { postInline } = require('../_includes/partials/postSnippets.11ty')

module.exports = {
  data: {
    title: 'Notes',
    permalink: '/notes/',
  },

  render(data) {
    return html`
      <ul id="notes">
        ${data.collections.notes.map(
          (item) => html`
            <li>
              ${postInline(item.data)}${Array.isArray(item.data.tags)
                ? item.data.tags.map((tag) => {
                    const url = `/tag/${tag}`
                    return html` <a href="${url}" class="tag-badge">${tag}</a> `
                  })
                : ''}
            </li>
          `
        )}
      </ul>
    `
  },
}
