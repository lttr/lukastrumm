const { html, base } = require('./base.11ty')

module.exports = {
  render(data) {
    const { content, title, page } = data
    const sectionClasses = ['article-content']
    if (page.excerpt) {
      sectionClasses.push('has-excerpt')
    }
    const template = html`
      <article>
        <h1>${title}</h1>
        <section class="${sectionClasses.join(' ')}">
          ${{ html: content }}
        </section>
      </article>
    `
    return base(this, template, data)
  },
}
