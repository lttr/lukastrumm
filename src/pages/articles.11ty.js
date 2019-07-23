const { html, base } = require('../_includes/base.11ty')

module.exports = class {
  data() {
    return {
      title: 'Articles',
      permalink: '/articles/',
    }
  }

  render(data) {
    const { content, collections } = data
    const template = html`
      ${{ html: content }}
      <ul>
        ${collections.articles.map(
          article => html`
            <a href="${article.url}">
              <li>${article.data.title}</li>
            </a>
          `
        )}
      </ul>
    `
    return base(this, template, data)
  }
}
