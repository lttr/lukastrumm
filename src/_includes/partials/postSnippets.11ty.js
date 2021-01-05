const html = require('../../_lib/html')
const { formatDate } = require('../../_lib/formatDate')

function postInline(data, includeDate = true) {
  const {
    title,
    page: { url, date },
  } = data
  return html`
    <a href="${url}">${title}</a>
    ${includeDate
      ? html`
          <time datetime="${date.toISOString()}">${formatDate(date)}</time>
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
    <time datetime="${date.toISOString()}">${formatDate(date)}</time>
    <p class="excerpt">${excerpt}</p>
  `
}

module.exports.postInline = postInline
module.exports.postWithExcerpt = postWithExcerpt
