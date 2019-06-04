const { html, base } = require('./base')

module.exports = function({ content, metadata, collections, page }) {
  return base(
    this,
    html`
      <main>${{ html: content }}</main>
      <h2>Blog posts</h2>
      <ul>
        ${collections.blog.map(
          (blog) => html`
            <li>${blog.data.title}</li>
          `
        )}
      </ul>
      <h2>Articles</h2>
      <ul>
        ${collections.articles.map(
          (article) => html`
            <li>${article.data.title}</li>
          `
        )}
      </ul>
    `,
    metadata,
    collections,
    page
  )
}
