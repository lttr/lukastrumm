const { html, raw } = require('../../_lib/html')
const formatDate = require('../../_lib/formatDate')

const base = require('./base.11ty')

module.exports = {
  render(data) {
    const { content, title, updated, page, tags, updates } = data
    const { excerpt, date } = page
    const currentArticleUpdates = updates[page.inputPath]
    let updatedDate = updated

    const lastUpdate = currentArticleUpdates
      ? currentArticleUpdates[currentArticleUpdates.length - 1]
      : null
    if (lastUpdate) {
      updatedDate = new Date(lastUpdate.date)
    }

    sectionClasses = ['post-content']
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
          ${updatedDate
            ? html`
                <em class="article-date">
                  (last update ${formatDate(updatedDate)})
                </em>
              `
            : ''}
        </section>
        <section class="${sectionClasses.join(' ')}">
          ${raw`${content}`}
        </section>

        ${tags
          ? html`
              <section class="tags">
                ${tags.map((tag) => {
                  const url = `/tag/${tag}`
                  return html` <a href="${url}" class="tag-badge">${tag}</a> `
                })}
              </section>
            `
          : ''}
        ${currentArticleUpdates
          ? html`
              <section class="updates">
                <div class="toc-heading">Updates</div>
                <ul>
                  ${currentArticleUpdates.map((update) => {
                    return html`<li>${update.date} ${update.message}</li>`
                  })}
                </ul>
              </section>
            `
          : null}
      </article>
    `
    return base(this, template, data)
  },
}
