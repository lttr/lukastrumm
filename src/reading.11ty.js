const { html, base } = require('../_includes/base.11ty')

module.exports = class {
  data() {
    return {
      title: 'Reading',
    }
  }

  render(data) {
    const template = html`
      <h1>Reading</h1>
    `
    return base(this, template, data)
  }
}
