const { html } = require('../_lib/html')
const { formatDate } = require('../_lib/formatDate')

module.exports = {
  data: {
    title: 'Talks',
    permalink: '/talks/',
  },

  render(data) {
    const styles = html`
      <style>
        .card {
          display: grid;
          grid-gap: 1rem;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
    slides,
    page: { url, date, excerpt },
  } = data
  const slidesUrl = slides ?? url.replace('README/', '')
  const readmeUrl = url
  return html`
    <li class="card-wrapper">
      <article class="card">
        <div class="card-body">
          <a href="${readmeUrl}" class="article-title">${title}</a><br />
          <time datetime="${date.toISOString()}"> ${formatDate(date)} </time>
          <p class="excerpt">${excerpt}</p>
        </div>
        <div>
          ${slides && html`<a href="${slidesUrl}" title="slides"> Slides</a>`}
        </div>
      </article>
    </li>
  `
}
