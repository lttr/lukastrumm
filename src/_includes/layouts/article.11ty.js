const { html, raw } = require('../../_lib/html')
const { formatDate } = require('../../_lib/formatDate')
const comments = require('../partials/comments.11ty')

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

    postContentSectionClasses = ['post-content']
    if (excerpt) {
      postContentSectionClasses.push('has-excerpt')
    }

    const template = html`
      <article>
        <header>
          ${title && html`<h1>${title}</h1>`}
          <p class="post-header-description">
            <span class="published-on">
              <time datetime="${date.toISOString()}">${formatDate(date)}</time>
              ${updatedDate
        ? html`
                    <br />
                    <time datetime="${date.toISOString()}">
                      (last update ${formatDate(updatedDate)})
                    </time>
                  `
        : ''}
            </span>
            ${tags
        ? html`
                  <span class="tags">
                    ${tags.map((tag) => {
          const url = `/tag/${tag}`
          return html`
                        <a href="${url}" class="tag-badge">${tag}</a>
                      `
        })}
                  </span>
                `
        : ''}
          </p>
        </header>

        <section class="${postContentSectionClasses.join(' ')}">
          ${raw`${content}`}
        </section>

        <footer>
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
        </footer>
      </article>
      <section class="comments">${comments(this)}</section>
    `
    return base(this, template, data)
  },
}
