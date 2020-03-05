const html = require('viperhtml').wire()

const base = require('./_includes/layouts/base.11ty')
const {
  postInline,
  postWithExcerpt,
} = require('./_includes/partials/postSnippets.11ty')

module.exports = {
  render(data) {
    const { collections } = data
    const template = html`
      <style>
        .home-page h2 {
          text-align: center;
        }

        .cards {
          display: grid;
          grid-gap: 10px;
          grid-template-columns: repeat(
            auto-fill,
            minmax(calc(var(--max-width) / 3), 1fr)
          );
          padding: 0;
          margin: 0;
        }

        .card {
          border: 1px solid #dddbda;
          border-radius: 0.1em;
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
          padding: 0.7em;
          list-style-type: none;
        }

        .card .excerpt {
          font-size: 85%;
        }
      </style>
      <section class="home-page">
        <h2>Articles</h2>
        <ul class="cards">
          ${collections.articles.map(
            item => html`
              <li class="card">
                ${postWithExcerpt(item.data)}
              </li>
            `
          )}
        </ul>
        <h2>Blog posts</h2>
        <ul class="cards">
          ${collections.blog.map(
            item => html`
              <li class="card">
                ${postWithExcerpt(item.data)}
              </li>
            `
          )}
        </ul>
        <h2>Notes</h2>
        <ul>
          ${collections.notes.map(
            item => html`
              <li>
                ${postInline(item.data, false)}
              </li>
            `
          )}
        </ul>
      </section>
    `

    return base(this, template, data)
  },
}
