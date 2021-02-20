const html = require('../_lib/html')

module.exports = {
  data: {
    title: 'Learning',
    permalink: '/learning/',
  },

  render() {
    return html` <p><em>This is my learning progress.<em></p> `
  },
}
