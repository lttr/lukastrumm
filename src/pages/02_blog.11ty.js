const { html, base } = require('../_includes/base.11ty')

module.exports = class {
  data() {
    return {
      title: 'Blog',
      permalink: '/blog/',
    }
  }
  render(data) {
    const template = html`
      <h1>Blog</h1>
      <ul>
        ${data.collections.blog.map(
          blog => html`
            <a href="${blog.url}">
              <li>${blog.data.title}</li>
            </a>
          `
        )}
      </ul>
    `
    return base(this, template, data)
  }
}
