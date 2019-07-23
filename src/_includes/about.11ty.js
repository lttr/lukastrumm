const { base } = require('./base.11ty')

module.exports = class {
  data() {
    return {
      title: 'About',
    }
  }
  render(data) {
    const template = data.content
    return base(this, template, data)
  }
}
