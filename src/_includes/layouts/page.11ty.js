const { html, raw } = require('../../_lib/html')
const base = require('./base.11ty')

module.exports = {
  render(data) {
    const { content, title } = data
    const template = html`
      <article>
        <header>${title && html`<h1>${title}</h1>`}</header>
        ${raw`${content}`}
      </article>
    `
    return base(this, template, data)
  },
}
