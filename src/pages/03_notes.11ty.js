const { html, base } = require('../_includes/base.11ty')

module.exports = class {
  data() {
    return {
      title: 'Notes',
      permalink: '/notes/',
    }
  }
  render(data) {
    const template = html`
      <h1>Notes</h1>
      <ul>
        ${data.collections.notes.map(
          note => html`
            <a href="${note.url}">
              <li>${note.data.title}</li>
            </a>
          `
        )}
      </ul>
    `
    return base(this, template, data)
  }
}
