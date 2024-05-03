const html = require("./_lib/html")
const { postWithExcerpt } = require("./_includes/partials/postSnippets.11ty")

module.exports = {
  data: {
    title: null,
    layout: "layouts/page",
  },
  render(data) {
    const { collections } = data
    return html`
      <section class="home-page">
        <h1>Blog posts</h1>
        <ul class="cards">
          ${collections.blog
            .slice(0, 6)
            .map(
              (post) => html`
                <li class="card">${postWithExcerpt(post.data)}</li>
              `,
            )}
        </ul>
        <p>
          <a href="/blog">All posts ➙</a>
        </p>
      </section>
    `
  },
}
