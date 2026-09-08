const { html, raw } = require("../../_lib/html")
const { formatDate } = require("../../_lib/formatDate")
const base = require("./base.11ty")

module.exports = {
  render(data) {
    const { content, title, number, page, collections } = data
    const { date } = page
    // collections.tips is sorted newest first
    const tips = collections.tips
    const index = tips.findIndex((item) => item.inputPath === page.inputPath)
    const newer = index > 0 ? tips[index - 1] : null
    const older = index >= 0 && index < tips.length - 1 ? tips[index + 1] : null

    const template = html`
      <article class="tip">
        <header>
          <p class="tip-number">Tip no. ${number}</p>
          <h1>${title}</h1>
          <p class="post-header-description">
            <span class="published-on">
              <time datetime="${date.toISOString()}">${formatDate(date)}</time>
            </span>
          </p>
        </header>
        <section class="post-content">${raw`${content}`}</section>
        <footer class="tip-footer">
          <nav class="tip-nav">
            ${older
              ? html`<a href="${older.url}"
                  >⟵ Tip no. ${older.data.number}: ${older.data.title}</a
                >`
              : html`<span></span>`}
            ${newer
              ? html`<a href="${newer.url}"
                  >Tip no. ${newer.data.number}: ${newer.data.title} ⟶</a
                >`
              : html`<span></span>`}
          </nav>
          <p><a href="/tips/#tip-${number}">All tips ➙</a></p>
        </footer>
      </article>
    `
    return base(this, template, data)
  },
}
