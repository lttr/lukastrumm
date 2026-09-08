const html = require("./_lib/html")
const { postWithExcerpt } = require("./_includes/partials/postSnippets.11ty")
const { tipFull } = require("./_includes/partials/tipSnippets.11ty")

module.exports = {
  data: {
    title: null,
    layout: "layouts/page",
  },
  render(data) {
    const { collections } = data
    return html`
      <section class="home-page">
        <h1>Tips</h1>
        <div class="tips-list">
          ${collections.tips.slice(0, 3).map((item) => tipFull(item))}
        </div>
        <p>
          <a href="/tips">All tips ➙</a>
        </p>
      </section>
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
