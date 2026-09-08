const html = require("../_lib/html")
const { tipFull } = require("../_includes/partials/tipSnippets.11ty")

module.exports = {
  data: {
    title: "Tips",
    permalink: "/tips/",
  },

  render(data) {
    return html`
      <div class="tips-list">
        ${data.collections.tips.map((item) => tipFull(item))}
      </div>
    `
  },
}
