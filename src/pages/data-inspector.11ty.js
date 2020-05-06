const html = require('../_lib/html')

module.exports = {
  data: {
    permalink: '/data-inspector/',
  },

  render(data) {
    return html`
      <style>
        section {
          margin: 1rem 0;
          padding: 1rem 0;
          border-bottom: 1px solid grey;
        }

        .data-inspector {
          font-family: monospace;
          font-size: 0.8rem;
        }

        .data-inspector ul,
        .data-inspector li,
        .data-inspector dl,
        .data-inspector dt,
        .data-inspector dd {
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .data-inspector ul,
        .data-inspector dl {
          margin-top: 0.1em;
          margin-left: 2em;
        }

        .data-inspector dl div {
          display: flex;
        }

        .data-inspector dt {
          font-weight: bold;
        }

        .data-inspector dt::after {
          content: ':';
          margin: 0 0.3em;
        }

        .data-inspector summary {
          font-weight: bold;
        }

        .data-inspector summary i {
          font-weight: normal;
        }
      </style>
      <h1>Eleventy data inspector</h1>
      <button id="expand-all">Expand all</button>
      <button id="collapse-all">Collapse all</button>
      <section class="data-inspector">
        ${renderData(data)}
      </section>
      <script>
        function saveToStorage(key, opened) {
          console.log(key, opened)
          const item = sessionStorage.getItem('eleventy-data-inspector')
          const keys = item ? new Set(JSON.parse(item)) : new Set()
          if (opened) {
            keys.add(key)
          } else {
            keys.delete(key)
          }
          const result = JSON.stringify([...keys])
          sessionStorage.setItem('eleventy-data-inspector', result)
        }
        function restoreFromStorage() {
          const item = sessionStorage.getItem('eleventy-data-inspector')
          return item ? JSON.parse(item) : []
        }
        const openedKeys = restoreFromStorage()

        const expand = document.querySelector('#expand-all')
        const collapse = document.querySelector('#collapse-all')
        const dataInspector = document.querySelector('.data-inspector')
        const details = dataInspector.querySelectorAll('details')

        expand.addEventListener('click', (e) => {
          details.forEach((element) => {
            element.open = true
          })
        })
        collapse.addEventListener('click', (e) => {
          details.forEach((element) => {
            element.open = false
            sessionStorage.removeItem('eleventy-data-inspector')
          })
        })
        details.forEach((detail) => {
          const key = detail.querySelector('summary').textContent
          if (openedKeys.includes(key)) {
            detail.open = true
          }
          detail.addEventListener('click', (e) => {
            saveToStorage(key, !detail.open)
          })
        })
      </script>
    `
  },
}

const isNullOrUndefined = (v) => v === null || v === undefined
const isBoolean = (value) => typeof value === 'boolean'
const isNumber = (value) => typeof value === 'number'
const isString = (v) => typeof v === 'string'
const isBigInt = (v) => typeof v === 'bigint'
const isSymbol = (v) => typeof v === 'symbol'
const isRegExp = (value) => value instanceof RegExp
const isDate = (value) => value instanceof Date
const isObject = (value) => value instanceof Object
const isArray = (value) => Array.isArray(value)

const isSimple = (v) =>
  isNullOrUndefined(v) ||
  isBoolean(v) ||
  isNumber(v) ||
  isString(v) ||
  isBigInt(v) ||
  isSymbol(v) ||
  isRegExp(v) ||
  isDate(v)

const stringify = (v) => {
  let str = ''
  if (isSimple(v)) {
    if (isString(v)) {
      str = `"${v}"`
    } else if (isDate(v)) {
      str = v.toISOString()
    } else {
      str = `${v}`
    }
  } else if (isArray(v)) {
    str = `[ ${v.map((w) => stringify(w)).join(', ')} ]`
  } else if (isObject(v)) {
    str = `{ ${Object.entries(v)
      .map(([key, value]) => `${key}: ${stringify(value)}`)
      .join(', ')} }`
  }
  return str
}

const shorten = (str) => {
  return `${str.slice(0, 40)}${str.length > 40 ? '…' : ''}`
}

function renderData(data) {
  return html`
    <ul>
      ${Object.entries(data)
        .filter(([k]) => !k.startsWith('_'))
        .map(([k, v]) => {
          return html`
            <li>
              <details>
                ${k === 'collections'
                  ? html`${renderCollections(v)}`
                  : html`${renderDetails(k, v)}`}
              </details>
            </li>
          `
        })}
    </ul>
  `
}

function renderDetails(key, value) {
  return html`
    <summary>${key} <i>${shorten(stringify(value))}</i></summary>
    ${isSimple(value)
      ? stringify(value)
      : isObject(value)
      ? renderData(value)
      : stringify(value)}
  `
}

function renderCollections(collections) {
  return html`
    <summary>collections</summary>
    <ul>
      ${Object.entries(collections).map(([collectionName, collection]) => {
        return html`
          <li>
            <details>
              <summary>${collectionName}</summary>
              <ul>
                ${collectionName === 'tagList'
                  ? renderData(collection)
                  : renderCollection(collection)}
              </ul>
            </details>
          </li>
        `
      })}
    </ul>
  `
}

function renderCollection(collection) {
  return collection.map((post) => {
    return html`
      <details>
        <summary>${post.fileSlug}</summary>
        <li>
          <ul>
            ${renderPost(post)}
          </ul>
        </li>
      </details>
    `
  })
}

function renderPost(post) {
  return Object.keys(post)
    .filter(
      (key) =>
        !key.startsWith('_') && key !== 'templateContent' && key !== 'data'
    )
    .map((key) => {
      const value = post[key]
      return html`
        <li>
          <details>
            <summary
              >${key}
              <i
                >${isSimple(value) ? shorten(stringify(value)) : ''}</i
              ></summary
            >
            ${key === 'template' ? renderPostTemplate(value) : stringify(value)}
          </details>
        </li>
      `
    })
}

function renderPostTemplate(template) {
  return html`
    <ul>
      ${Object.keys(template)
        .filter((key) => !key.startsWith('_'))
        .map((key) => {
          const value = template[key]
          return html`
            <li>
              <details>
                <summary
                  >${key}
                  <i
                    >${isSimple(value) ? shorten(stringify(value)) : ''}</i
                  ></summary
                >
                ${value}
              </details>
            </li>
          `
        })}
    </ul>
  `
}
