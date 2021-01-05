const html = require('../_lib/html')
const { postInline } = require('../_includes/partials/postSnippets.11ty')

module.exports = {
  data: {
    title: 'Blog',
    permalink: '/blog/',
  },

  render(data) {
    const postsByYear = data.collections.blog.reduce((blogsByYear, blog) => {
      const year = new Date(blog.data.page.date).getFullYear()
      blogsByYear[year] = blogsByYear[year] || []
      blogsByYear[year].push(blog)
      return blogsByYear
    }, {})

    return html`
      ${Object.entries(postsByYear).map(([year, posts]) => {
        return html`
          <h2>${year}</h2>
          <ul>
            ${posts.map((post) => {
              return html`<li>${postInline(post.data)}</li>`
            })}
          </ul>
        `
      })}
    `
  },
}
