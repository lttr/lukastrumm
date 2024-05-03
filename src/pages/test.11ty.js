const { html } = require('../_lib/html')

module.exports = {
  data: {
    permalink: '/test/',
  },
  async render(data) {
    return html`
      <div>
        <h2>Build</h2>
        <pre>
${JSON.stringify(data.eleventy.generator, null, 2)}
        </pre
        >
      </div>
    `
  },
}
