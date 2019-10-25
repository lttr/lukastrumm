const { html, base } = require('./base.11ty')

module.exports = {
  render(data) {
    const { content, title, updated, page } = data
    const { excerpt, date } = page

    const sectionClasses = ['article-content']
    if (excerpt) {
      sectionClasses.push('has-excerpt')
    }

    function formatDate(dateTime) {
      const dateFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }
      return Intl.DateTimeFormat('en', dateFormatOptions).format(dateTime)
    }

    const template = html`
      <article>
        <h1>${title}</h1>
        <section class="article-description">
          <em class="article-date">
            ${formatDate(date)}
          </em>
          ${updated
            ? html`
                <em class="article-date">
                  (last update ${formatDate(updated)})
                </em>
              `
            : ''}
        </section>
        <section class="${sectionClasses.join(' ')}">
          ${{ html: content }}
        </section>
      </article>
    `
    return base(this, template, data)
  },
}
