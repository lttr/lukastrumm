const inline = require('./_lib/inline')

module.exports = {
  data: {
    layout: 'layouts/plain',
    templateEngineOverride: '11ty.js,md',
  },
  render() {
    return inline('README.md')
  },
}
