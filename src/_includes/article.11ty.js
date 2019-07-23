const { html, base } = require('./base.11ty')

module.exports = class {
  render(data) {
    const { content, collections } = data
    const template = html`
      <article>
        ${{ html: content }}
      </article>
    `
    return base(this, template, data)
  }
}
