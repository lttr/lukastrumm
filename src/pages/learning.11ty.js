const { html, raw } = require('../_lib/html')
const { formatMonthAndYear } = require('../_lib/formatDate')
const linkifyStr = require('linkify-string')

function insertNewlines(str) {
  return str.replace(/(\r\n)+/g, '<br>').replace(/(\n)+/g, '<br>')
}

module.exports = {
  data: {
    title: 'Learning',
    permalink: '/learning/',
  },

  render(data) {
    const sortedIssues = data.learningProgressIssues.slice()
    sortedIssues.sort(
      (a, b) =>
        new Date(b.closed_at).getTime() - new Date(a.closed_at).getTime()
    )
    const closedByYearMap = sortedIssues
      .filter((issue) => issue.state === 'closed')
      .reduce((closedByYear, issue) => {
        const year = new Date(issue.closed_at).getFullYear()
        closedByYear[year] = closedByYear[year] || []
        closedByYear[year].push(issue)
        return closedByYear
      }, {})

    return html`
      <div class="post-content">
        <p><em>This is my learning progress.</em></p>
        <h2>Upcomming</h2>
        <ul>
          ${data.learningProgressIssues
            .filter((issue) => issue.state === 'open')
            .map(
              (issue) => html`<li>
                <h4>${issue.title}</h4>
                <p>${raw`${insertNewlines(linkifyStr(issue.body))}`}</p>
              </li>`
            )}
        </ul>
        <h2>Finished</h2>
        ${Object.entries(closedByYearMap).map(
          ([year, issues]) => html`
            <h3>${year}</h3>
            <ul>
              ${issues
                .filter(
                  (issue) =>
                    !issue.labels.find((label) => label.name === 'earlier')
                )
                .map(
                  (issue) => html`<li>
                    <h4>${issue.title}</h4>
                    <p>${raw`${insertNewlines(linkifyStr(issue.body))}`}</p>
                    <p>
                      <em
                        >finished in ${formatMonthAndYear(issue.closed_at)}</em
                      >
                    </p>
                  </li>`
                )}
            </ul>
          `
        )}

        <h3>2020 and earlier</h3>
        <ul>
          ${sortedIssues
            .filter((issue) =>
              issue.labels.find((label) => label.name === 'earlier')
            )
            .map(
              (issue) => html`<li>
                <h4>${issue.title}</h4>
                <p>${raw`${insertNewlines(linkifyStr(issue.body))}`}</p>
              </li>`
            )}
        </ul>
      </div>
    `
  },
}
