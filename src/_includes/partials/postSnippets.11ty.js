const html = require('../../_lib/html')
const formatDate = require('../../_lib/formatDate')

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

function postWithExcerpt(data) {
  const {
    title,
    page: { url, date, excerpt },
  } = data
  return html`
    <a href="${url}" class="article-title">${title}</a><br />
    <em class="article-date">
      ${formatDate(date)}
    </em>
    <p class="excerpt">
      ${excerpt}
    </p>
  `
}

module.exports.postInline = postInline
module.exports.postWithExcerpt = postWithExcerpt
