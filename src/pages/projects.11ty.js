const linkifyString = require('linkifyjs/string')

const { html, raw } = require('../_lib/html')
const formatDate = require('../_lib/formatDate')

module.exports = {
  data: {
    title: 'Projects',
    permalink: '/projects/',
  },

  render(data) {
    const styles = html`
      <style>
        .card {
          display: grid;
          grid-gap: 1rem;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }

        .card-embed {
          margin: 0;
          margin-right: 1rem;
        }

        .card-iframe {
          width: 100%;
          border: 2px solid var(--text-color);
        }
      </style>
    `
    return html`
      ${styles}
      <h2>Labs</h2>
      <ul class="cards full-width">
        ${data.collections.labs.map((item) => html` ${renderLab(item.data)} `)}
      </ul>

      <h2>Github projects</h2>
      <ul class="cards full-width">
        ${data.repos
          .filter((repo) => !repo.fork && !repo.archived)
          .map(renderRepo)}
      </ul>
    `
  },
}

function renderLab(data) {
  const {
    title,
    page: { url, date, excerpt },
  } = data
  const labUrl = url + 'lab/'
  return html`
    <li class="card">
      <div class="card-body">
        <a href="${labUrl}" class="article-title">${title}</a><br />
        <em class="article-date">
          ${formatDate(date)}
        </em>
        <p class="excerpt">
          ${excerpt}
        </p>
      </div>
      <div class="card-embed">
        <a href="${labUrl}">
          <iframe
            src="${labUrl}"
            class="card-iframe"
            scrolling="no"
            loading="lazy"
            title="${`Embed HTML page - ${excerpt}`}"
          />
        </a>
      </div>
    </li>
  `
}

function renderRepo(repo) {
  return html`
    <li class="card">
      <div class="card-body">
        <a href="${repo.html_url}" class="article-title">
          <span>${repo.name}</span>
        </a>
        ${repo.description
          ? html`<p class="excerpt">
              ${raw`${linkifyString(repo.description, { target: null })}`}
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
      </div>
    </li>
  `
}
