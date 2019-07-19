const viperhtml = require('viperhtml')

const html = viperhtml.wire()

module.exports = {
  data() {
    return {
      title: 'Life',
      permalink: 'life',
      layout: 'page',
    }
  },
  render(data) {
    return html`
      <div>foo</div>
    `
  },
}
