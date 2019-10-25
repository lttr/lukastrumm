const { html, base } = require('./_includes/base.11ty')

module.exports = {
  render(data) {
    const { content, collections } = data
    const template = html`
      <h2>Articles</h2>
      <ul>
        ${collections.articles.map(
          item => html`
            <a href="${item.url}">
              <li>${item.data.title}</li>
            </a>
          `
        )}
      </ul>
      <h2>Blog posts</h2>
      <ul>
        ${collections.blog.map(
          item => html`
            <a href="${item.url}">
              <li>${item.data.title}</li>
            </a>
          `
        )}
      </ul>
      <h2>Notes</h2>
      <ul>
        ${collections.notes.map(
          item => html`
            <a href="${item.url}">
              <li>${item.data.title}</li>
            </a>
          `
        )}
      </ul>
    `

    return base(this, template, data)
  },
}
