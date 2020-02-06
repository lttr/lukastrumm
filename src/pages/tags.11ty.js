const { html, base } = require('../_includes/layouts/base.11ty')

module.exports = {
  data: {
    title: 'Tags',
    permalink: '/tags/',
  },

  render(data) {
    const counter = {}
    for (const post of data.collections.posts) {
      for (const tag of post.data.tags) {
        if (counter[tag]) {
          counter[tag] += 1
        } else {
          counter[tag] = 1
        }
      }
    }
    const template = html`
      <h1>Tags</h1>
      <p class="tags">
        ${data.collections.tagList.sort().map(tag => {
          const url = `/tag/${tag}`
          const count = counter[tag]
          return html`
            <a href="${url}" class="tag-badge">
              ${tag} <span class="count">(${count})</span>
            </a>
          `
        })}
      </p>
    `
    return base(this, template, data)
  },
}
