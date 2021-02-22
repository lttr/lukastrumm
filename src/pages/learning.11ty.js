const { html, raw } = require('../_lib/html')
const { formatDate } = require('../_lib/formatDate')
const linkifyStr = require('linkifyjs/string')

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
      <p><em>This is my learning progress.</em></p>
      <h2>Upcomming</h2>
      <ul>
        ${data.learningProgressIssues
          .filter((issue) => issue.state === 'open')
          .map(
            (issue) => html`<li>
              <h4>${issue.title}</h4>
              <p>${raw`${linkifyStr(issue.body)}`}</p>
            </li>`
          )}
      </ul>
      <h2>Finished</h2>
      ${Object.entries(closedByYearMap).map(
        ([year, issues]) => html`
          <h3>${year}</h3>
          <ul>
            ${issues.map(
              (issue) => html`<li>
                <h4>${issue.title}</h4>
                <p>${raw`${linkifyStr(issue.body)}`}</p>
                <p><em>finished at ${formatDate(issue.closed_at)}</em></p>
              </li>`
            )}
          </ul>
        `
      )}
    `
  },
}
