const { html } = require('../_lib/html')
const { formatDate } = require('../_lib/formatDate')

module.exports = {
  data: {
    title: 'Talks',
    permalink: '/speaking/',
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
      <ul class="cards full-width">
        ${data.collections.talks.map(
          (item) => html` ${renderTalk(item.data)} `
        )}
      </ul>
    `
  },
}

function renderTalk(data) {
  const {
    title,
    image,
    page: { url, date, excerpt },
  } = data
  const slidesUrl = url.replace('README/', '')
  const readmeUrl = url
  const imageUrl = `${slidesUrl}${image}`
  const altText = `${title} - screenshot from slides`
  return html`
    <li class="card-wrapper">
      <article class="card">
        <div class="card-body">
          <a href="${readmeUrl}" class="article-title">${title}</a><br />
          <time datetime="${date.toISOString()}"> ${formatDate(date)} </time>
          <p class="excerpt">${excerpt}</p>
        </div>
        <div class="card-embed">
          ${image &&
          html`
            <a href="${slidesUrl}" title="slides">
              <img src="${imageUrl}" alt="${altText}" />
            </a>
          `}
        </div>
      </article>
    </li>
  `
}
