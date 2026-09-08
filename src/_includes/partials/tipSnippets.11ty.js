const { html, raw } = require("../../_lib/html")
const { formatDate } = require("../../_lib/formatDate")

function tipFull(item) {
  const { title, number, draft } = item.data
  const { url, date } = item.data.page
  return html`
    <article class="tip-item" id="tip-${number}">
      <h3 class="tip-title">
        <span class="tip-number">Tip no. ${number}</span>
        <a href="${url}">${title}</a>
        ${draft ? ">> DRAFT <<" : ""}
      </h3>
      <div class="tip-body">${raw`${item.templateContent}`}</div>
      <time datetime="${date.toISOString()}">${formatDate(date)}</time>
    </article>
  `
}

module.exports.tipFull = tipFull
