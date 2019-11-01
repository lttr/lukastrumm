const { html } = require('../layouts/base.11ty')
const { formatDate } = require('../helpers/formatDate')

function postInline(data) {
  const {
    title,
    page: { url, date },
  } = data
  return html`
    <a href="${url}">${title}</a>
    <em class="article-date">
      ${formatDate(date)}
    </em>
  `
}

module.exports.postInline = postInline
