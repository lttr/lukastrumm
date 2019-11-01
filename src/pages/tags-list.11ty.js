const { html, base } = require('../_includes/layouts/base.11ty')

module.exports = {
  data: {
    title: 'Tags',
    permalink: '/tags/',
  },

  render(data) {
    const template = html`
      <h1>Tags</h1>
      ${data.collections.tagList.map((tag, index) => {
        const url = index === 0 ? `/tag` : `/tag/${index}`
        return html`
          <a href="${url}" class="tag">${tag}</a>
        `
      })}
    `
    return base(this, template, data)
  },
}
