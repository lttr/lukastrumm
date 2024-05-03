const html = require("../_lib/html")

module.exports = {
  data: {
    title: "Eleventy data inspector",
    permalink: "/data-inspector/",
  },

  render(data) {
    if (process.env.DEV) {
      const stats = renderStats(data)
      return html`<section class="stats">${stats}</section>`
    }
  },
}

function renderStats(data) {
  const tags = [
    ...new Set(
      data.collections.all
        .filter((item) => Array.isArray(item.data.tags))
        .flatMap((item) => item.data.tags),
    ),
  ]
  const dependencies = [
    ...(data.pkg.devDependencies ? Object.keys(data.pkg.devDependencies) : []),
    ...(data.pkg.dependencies ? Object.keys(data.pkg.dependencies) : []),
  ]
  const layouts = [
    ...new Set(
      data.collections.all.map((item) => item.template.frontMatter.data.layout),
    ),
  ]

  function renderDetails(what, array) {
    return html`
      <details>
        <summary>number of ${what}: ${array.length}</summary>
        <ul>
          ${array.sort().map((c) => html`<li>${c}</li>`)}
        </ul>
      </details>
    `
  }

  return html`<h4>Statistics</h4>
    <ul>
      <li>${renderDetails("collections", Object.keys(data.collections))}</li>
      <li>
        ${renderDetails("pages in 'all' collection", data.collections.all)}
      </li>
      <li>${renderDetails("unique tags", tags)}</li>
      <li>${renderDetails("direct dependencies", dependencies)}</li>
      <li>${renderDetails("layouts", layouts)}</li>
    </ul> `
}
