const html = require('./_lib/html')
const {
  postInline,
  postWithExcerpt,
} = require('./_includes/partials/postSnippets.11ty')

module.exports = {
  data: {
    title: null,
    layout: 'layouts/page',
  },
  render(data) {
    const { collections } = data
    return html`
      <section class="home-page">
        <!-- <h1>Articles</h1>
        <ul class="cards">
          ${collections.articles.map(
          (item) => html`
            <li class="card">
              ${postWithExcerpt(item.data)}
            </li>
          `
        )}
        </ul> -->
        <h1>Blog posts</h1>
        <ul class="cards">
          ${collections.blog.map(
            (item) => html`
              <li class="card">
                ${postWithExcerpt(item.data)}
              </li>
            `
          )}
        </ul>
        <h1>Notes</h1>
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
