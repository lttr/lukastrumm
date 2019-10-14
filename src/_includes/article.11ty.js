const { html, base } = require('./base.11ty')

module.exports = class {
  render(data) {
    const { content, title } = data
    const template = html`
      <h1>${title}</h1>
      <article>
        ${{ html: content }}
      </article>
    `
    return base(this, template, data)
  }
}
