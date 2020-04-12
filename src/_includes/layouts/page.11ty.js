const { raw } = require('../../_lib/html')
const base = require('./base.11ty')

module.exports = {
  render(data) {
    const content = raw`${data.content}`
    return base(this, content, data)
  },
}
