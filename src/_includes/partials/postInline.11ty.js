const { html } = require('../layouts/base.11ty')
const { formatDate } = require('../helpers/formatDate')

function postInline(data, includeDate = true) {
  const {
    title,
    page: { url, date },
  } = data
  return html`
    <a href="${url}">${title}</a>
    ${includeDate
      ? html`
          <em class="article-date">
            ${formatDate(date)}
          </em>
        `
      : ''}
  `
}

module.exports.postInline = postInline
