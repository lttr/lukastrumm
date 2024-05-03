const html = require("../../_lib/html")
const { formatDate } = require("../../_lib/formatDate")

function postInline(data, includeDate = true) {
  const {
    title,
    page: { url, date },
  } = data
  return html`
    <span class="post-inline">
      <a href="${url}">${title}</a>
      ${includeDate
        ? html`<time datetime="${date.toISOString()}">
            ${formatDate(date)}
          </time>`
        : ""}
    </span>
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
    ${data.draft ? ">> DRAFT <<" : ""}
    <p class="excerpt">${excerpt}</p>
  `
}

function tags(tags) {
  return html`<span class="tags"
    >${tags.map((tag) => {
      const url = `/tag/${tag}`
      return html`<a href="${url}" class="tag-badge">${tag}</a>`
    })}</span
  >`
}

function getCategory(url) {
  const firstSegment = url.split("/")[1]
  if (firstSegment) {
    switch (firstSegment) {
      case "notes":
        return "note"
      default:
        return firstSegment
    }
  }
}

module.exports.postInline = postInline
module.exports.postWithExcerpt = postWithExcerpt
module.exports.tags = tags
module.exports.getCategory = getCategory
