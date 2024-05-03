const html = require("../_lib/html")

module.exports = {
  data: {
    title: "Sitemap",
    permalink: "/sitemap/",
  },

  render(data) {
    return html`
      <ul>
        ${data.collections.all
          .filter(
            (page) => !page.url.startsWith("/_") && !page.url.endsWith(".json"),
          )
          .map(({ url, date }) => ({ url, date }))
          .sort((a, b) => a.url.localeCompare(b.url))
          .map(({ url, date }) => {
            return html`
              <li>
                <a href="${this.url(url)}">${this.url(url)}</a>
                <time datetime="${date.toISOString()}">
                  ${date.toISOString().slice(0, 10)}
                </time>
              </li>
            `
          })}
      </ul>
    `
  },
}
