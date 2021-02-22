const { html } = require('../_lib/html')
const { formatDate } = require('../_lib/formatDate')

module.exports = {
  data: {
    title: 'Projects',
    permalink: '/projects/',
  },

  render(data) {
    const activeRepos = data.repos.filter(
      (repo) => !repo.fork && !repo.archived
    )
    activeRepos.sort((a, b) => {
      return new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
    })

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

        .repo-header {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: baseline;
        }

        @media (max-width: 550px) {
          .repo-header {
            display: block;
          }
        }

        .repo-name {
          font-family: var(--heading-font);
          font-weight: var(--heading-font-weight);
        }

        .repo-site {
          font-family: var(--heading-font);
          font-weight: var(--heading-font-weight);
        }

        .repo-description {
          margin: 0.3rem 0;
        }

        .repo-last-push,
        .repo-lang,
        .repo-topics {
          font-size: var(--small-font);
          margin: 0.2rem 0;
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
        ${activeRepos.map(renderRepo)}
      </ul>
    `
  },
}

function renderLab(data) {
  const {
    title,
    image,
    page: { url, date, excerpt },
  } = data
  const labUrl = url.replace('README/', '')
  const readmeUrl = url
  const imageUrl = `${labUrl}${image}`
  const altText = `${title} - page screenshot`
  return html`
    <li class="card-wrapper">
      <article class="card">
        <div class="card-body">
          <a href="${readmeUrl}" class="article-title">${title}</a><br />
          <time datetime="${date.toISOString()}"> ${formatDate(date)} </time>
          <p class="excerpt">${excerpt}</p>
        </div>
        <div class="card-embed">
          <a href="${labUrl}">
            <img src="${imageUrl}" alt="${altText}" />
          </a>
        </div>
      </article>
    </li>
  `
}

function renderRepo(repo) {
  return html`
    <li class="card-wrapper">
      <article class="card">
        <div class="card-body">
          <header class="repo-header">
            <div class="repo-name">
              <a href="${repo.html_url}"> ${repo.name} </a>
              <span class="repo-site">
                ${repo.homepage
                  ? html`( <a href="${repo.homepage}">SITE</a> )`
                  : null}
              </span>
            </div>
            <div class="repo-last-push">
              <time><i>Last activity:</i> ${formatDate(repo.pushed_at)}</time>
            </div>
          </header>
          <div class="repo-description">${repo.description}</div>
          ${repo.language
            ? html`<div class="repo-lang">
                <i>Main language:</i>
                ${repo.language ? html`${repo.language}` : null}
              </div>`
            : null}
          ${repo.topics.length
            ? html`<div class="repo-topics">
                <i>Topics:</i>
                ${repo.topics.join(', ')}
              </div>`
            : null}
        </div>
      </article>
    </li>
  `
}
