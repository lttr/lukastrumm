const html = require('./_lib/html')
const {
  postInline,
  postWithExcerpt,
} = require('./_includes/partials/postSnippets.11ty')

module.exports = {
  data: {
    layout: 'layouts/page',
  },
  render(data) {
    const { collections } = data
    return html`
      <style>
        .home-page h2 {
          text-align: center;
        }
      </style>
      <section class="home-page">
        <h2>Articles</h2>
        <ul class="cards">
          ${collections.articles.map(
            (item) => html`
              <li class="card">
                ${postWithExcerpt(item.data)}
              </li>
            `
          )}
        </ul>
        <h2>Blog posts</h2>
        <ul class="cards">
          ${collections.blog.map(
            (item) => html`
              <li class="card">
                ${postWithExcerpt(item.data)}
              </li>
            `
          )}
        </ul>
        <h2>Notes</h2>
        <ul>
          ${collections.notes.map(
            (item) => html`
              <li>
                ${postInline(item.data, false)}
              </li>
            `
          )}
        </ul>
      </section>
    `
  },
}
