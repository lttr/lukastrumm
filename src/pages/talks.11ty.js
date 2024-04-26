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
        ${data.talks
        .sort(
          (t1, t2) =>
            new Date(t2.data.date).getTime() -
            new Date(t1.data.date).getTime()
        )
        .map((item) => html`${renderTalk(item)}`)}
      </ul>
    `
  },
}

function renderTalk(item) {
  const {
    excerpt,
    slug,
    data: { title, date, lang },
  } = item
  const slidesUrl = `https://talks.lukastrumm.com/${slug}`
  const talkDate = new Date(date)
  return html`
    <li class="card-wrapper">
      <article class="card">
        <div class="card-body">
          <h2>${title}</h2>
          ${slug && html`<div><a href="${slidesUrl}">Slides</a></div>`}
          ${lang &&
    html`<div>
            <em style="text-transform: capitalize;">in ${lang}</em>
          </div>`}
          <time datetime="${talkDate.toISOString()}">
            ${formatDate(date)}
          </time>
          <p class="excerpt">${excerpt}</p>
        </div>
      </article>
    </li>
  `
}
