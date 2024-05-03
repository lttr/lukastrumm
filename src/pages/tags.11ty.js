const html = require("../_lib/html")

module.exports = {
  data: {
    title: "Tags",
    permalink: "/tags/",
  },

  render(data) {
    const counter = {}
    for (const post of data.collections.posts) {
      if (Array.isArray(post.data.tags)) {
        for (const tag of post.data.tags) {
          if (counter[tag]) {
            counter[tag] += 1
          } else {
            counter[tag] = 1
          }
        }
      }
    }
    return html`
      <p class="tags cloud">
        ${data.collections.tagList.sort().map((tag) => {
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
  },
}
