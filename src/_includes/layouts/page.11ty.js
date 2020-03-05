const base = require('./base.11ty')

module.exports = {
  render(data) {
    const template = data.content
    return base(this, template, data)
  },
}
