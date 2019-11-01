const { html, base } = require('./base.11ty')
const { formatDate } = require('../helpers/formatDate')

module.exports = {
  render(data) {
    const { content, title, updated, page, tags } = data
    const { excerpt, date } = page

    const sectionClasses = ['article-content']
    if (excerpt) {
      sectionClasses.push('has-excerpt')
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
        ${tags
          ? html`
              <section class="tags">
                ${tags.map(tag => {
                  const index = data.collections.tagList.indexOf(tag)
                  const url = index === 0 ? `/tag` : `/tag/${index}`
                  return html`
                    <a href="${url}" class="tag">${tag}</a>
                  `
                })}
              </section>
            `
          : ''}
      </article>
    `
    return base(this, template, data)
  },
}
