const viperhtml = require('viperhtml')

const html = viperhtml.wire()

module.exports = class {
  data() {
    return {
      title: 'Articles',
      permalink: 'articles',
      layout: 'page',
    }
  }

  render(data) {
    return html`
      <div>foo</div>
    `
  }
}
