const { html, base } = require('../_includes/layouts/base.11ty')
const { postInline } = require('../_includes/partials/postInline.11ty')

module.exports = {
  data: {
    title: 'Notes',
    permalink: '/notes/',
  },

  render(data) {
    const template = html`
      <style>
        .label-text {
          color: grey;
          padding-right: 0.3em;
          font-size: 80%;
        }
      </style>
      <h1>Notes</h1>
      <label
        ><span class="label-text">Quick jump to note</span>
        <input
          type="search"
          id="notes-search"
          list="notes-data"
          aria-label="Search through notes"
        />
      </label>
      <button id="jump-to-note">Jump</button>
      <datalist id="notes-data">
        ${data.collections.notes.map(
          item =>
            html`
              <option value="${item.data.title}" />
            `
        )}
      </datalist>
      <ul id="notes">
        ${data.collections.notes.map(
          item => html`
            <li>
              ${postInline(item.data)}
              ${Array.isArray(item.data.tags)
                ? item.data.tags.map(tag => {
                    return html`
                      <span class="tag">${tag}</span>
                    `
                  })
                : ''}
            </li>
          `
        )}
      </ul>
      <script>
        const jump = document.querySelector('#jump-to-note')
        const search = document.querySelector('#notes-search')
        const notes = document.querySelector('#notes')
        search.addEventListener('keyup', e => {
          if (e.keyCode === 13) {
            jump.click()
          }
        })
        jump.addEventListener('click', () => {
          const match = Array.from(notes.children).find(note => {
            return note.textContent.includes(search.value)
          })
          match.querySelector('a').click()
        })
      </script>
    `
    return base(this, template, data)
  },
}
