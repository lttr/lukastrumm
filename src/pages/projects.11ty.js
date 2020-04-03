const html = require('viperhtml').wire()
const linkifyString = require('linkifyjs/string')

const base = require('../_includes/layouts/base.11ty')

module.exports = {
  data: {
    title: 'Projects',
    permalink: '/projects/',
  },

  render(data) {
    const template = html`
      <h2>Labs</h2>
      <h2>Github projects</h2>
      <ul class="cards full-width">
        ${data.repos
          .filter((repo) => !repo.fork && !repo.archived)
          .map(renderRepo)}
      </ul>
    `
    return base(this, template, data)
  },
}

function renderRepo(repo) {
  return html`
    <li class="card">
      <a href="${repo.html_url}" class="article-title">
        <span>${repo.name}</span>
      </a>
      ${repo.description
        ? html`<p class="excerpt">
            ${{ html: linkifyString(repo.description, { target: null }) }}
          </p>`
        : null}
      <p class="source-language">
        ${repo.language ? html`<code>${repo.language}</code>` : null}
      </p>
      <p class="topics">
        ${repo.topics.map((topic) => {
          return html`<span class="tag-badge">${topic}</span>`
        })}
      </p>
    </li>
  `
}
