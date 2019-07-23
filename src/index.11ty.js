const { html, base } = require('./_includes/base.11ty')

module.exports = class {
  render(data) {
    const { content, collections } = data
    const template = html`
      <h2>Blog posts</h2>
      <ul>
        ${collections.blog.map(
          blog => html`
            <li>${blog.data.title}</li>
          `
        )}
      </ul>
      <h2>Articles</h2>
      <ul>
        ${collections.articles.map(
          article => html`
            <a href="${article.data.url}">
              <li>${article.data.title}</li>
            </a>
          `
        )}
      </ul>
    `

    return base(this, template, data)
  }
}
