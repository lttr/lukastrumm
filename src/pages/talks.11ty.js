const { html, raw } = require("../_lib/html")
const { formatDate } = require("../_lib/formatDate")
const markdownIt = require("markdown-it")
const md = markdownIt()

module.exports = {
  data: {
    title: "Talks",
    permalink: "/talks/",
  },

  render(data) {
    const styles = html`
      <style>
        .card {
          display: grid;
          grid-gap: 1rem;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }

        .card-image {
          float: right;
          aspect-ratio: 1;
          margin-top: 1.5rem;
          filter: unset !important;
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
              new Date(t1.data.date).getTime(),
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
    data: { title, date, lang, image, video },
  } = item
  const slidesUrl = `https://talks.lukastrumm.com/${slug}`
  const talkDate = new Date(date)
  return html`
    <li class="card-wrapper">
      <article class="card">
        <div class="card-body">
          ${image &&
          html`<img
            src="${slidesUrl + "/" + image}"
            width="120"
            alt=""
            class="card-image"
          />`}
          <h2>${title}</h2>
          ${slug &&
          html`<div>
            <a href="${slidesUrl}">Slides</a>
            ${video && html` | <a href="${video}">Video</a>`}
          </div>`}
          ${lang &&
          html`<div>
            <em style="text-transform: capitalize;">in ${lang}</em>
          </div>`}
          <time datetime="${talkDate.toISOString()}">
            ${formatDate(date)}
          </time>
          <p class="excerpt">${raw`${md.renderInline(excerpt)}`}</p>
        </div>
      </article>
    </li>
  `
}
