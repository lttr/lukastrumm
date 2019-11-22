const { html, base } = require('../_includes/layouts/base.11ty')
const { postInline } = require('../_includes/partials/postInline.11ty')

module.exports = {
  data: {
    title: 'Notes',
    permalink: '/notes/',
  },

  render(data) {
    const template = html`
      <h1>Notes</h1>
      <ul>
        ${data.collections.notes.map(
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
