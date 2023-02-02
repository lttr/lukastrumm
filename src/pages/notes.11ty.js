const html = require('../_lib/html')
const { postInline, tags } = require('../_includes/partials/postSnippets.11ty')

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
          ? tags(item.data.tags)
          : ''}
            </li>
          `
    )}
      </ul>
    `
  },
}
