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

        .data-inspector summary i,
        .data-inspector summary em {
          font-weight: normal;
        }
        .data-inspector summary em {
          color: rebeccapurple;
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
const isBoolean = (v) => typeof v === 'boolean'
const isNumber = (v) => typeof v === 'number'
const isString = (v) => typeof v === 'string'
const isBigInt = (v) => typeof v === 'bigint'
const isSymbol = (v) => typeof v === 'symbol'
const isFunction = (v) => typeof v === 'function'
const isRegExp = (v) => v instanceof RegExp
const isDate = (v) => v instanceof Date
const isArray = (v) => Array.isArray(v)
const isObject = (v) => v instanceof Object

const classify = (v) => {
  if (v === null) return 'null'
  if (v === undefined) return 'undefined'
  if (isBoolean(v)) return 'boolean'
  if (isNumber(v)) return 'number'
  if (isString(v)) return 'string'
  if (isBigInt(v)) return 'bigint'
  if (isSymbol(v)) return 'symbol'
  if (isFunction(v)) return 'function'
  if (isRegExp(v)) return 'regexp'
  if (isDate(v)) return 'date'
  if (isArray(v)) return 'array'
  if (isObject(v)) return 'object'
  return 'unknown'
}

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
  } else if (isFunction(v)) {
    str = ''
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

const natural = new Intl.Collator('en', {
  numeric: true,
  sensitivity: 'accent',
}).compare

function renderData(data) {
  const filter = (key) => !key.startsWith('_')
  const content = (key, value) => html`
    ${key === 'collections'
      ? html`${renderCollections(value)}`
      : html`${renderDetails(key, value)}`}
  `
  return renderKeys(data, filter, content)
}

function renderKeys(data, filter, content) {
  return html`
    <ul>
      ${Object.keys(data)
        .filter(filter)
        .sort(natural)
        .map((key) => renderKey(data, key, content))}
    </ul>
  `
}

function renderKey(data, key, content) {
  const value = data[key]
  return html`
    <li>
      ${content(key, value)}
    </li>
  `
}

function renderSummary(key, value, excerpt = null) {
  return html`
    <summary
      >${key}
      <em>${classify(value)}</em>
      ${!isNullOrUndefined(excerpt)
        ? html`<i>${shorten(stringify(excerpt))}</i>`
        : ''}
    </summary>
  `
}

function renderDetails(key, value) {
  return html`
    <details>
      ${renderSummary(key, value, value)}
      ${isSimple(value)
        ? stringify(value)
        : isFunction(value)
        ? value
        : isObject(value)
        ? renderData(value)
        : stringify(value)}
    </details>
  `
}

// /collections
function renderCollections(data) {
  const filter = Boolean
  const content = (key, value) => html`
    ${renderSummary(key, value)}
    ${key === 'tagList' ? renderData(value) : renderCollection(value)}
  `
  return html`
    <details>
      ${renderSummary('collections', data, null)}
      ${renderKeys(data, filter, content)}
    </details>
  `
}

// /collections/<collection>
function renderCollection(data) {
  const filter = Boolean
  const content = (key, value) => html`
    <details>
      ${renderSummary(key, value, value.filePathStem)} ${renderPost(value)}
    </details>
  `
  return renderKeys(data, filter, content)
}

// /collections/<collection>/<post>
function renderPost(data) {
  const filter = (key) =>
    !key.startsWith('_') && key !== 'templateContent' && key !== 'data'
  const content = (key, value) => html`
    <details>
      ${renderSummary(key, value, value)}
      ${key === 'template' ? renderPostTemplate(value) : stringify(value)}
    </details>
  `
  return renderKeys(data, filter, content)
}

// /collections/<collection>/<post>/template
function renderPostTemplate(data) {
  const filter = (key) =>
    !key.startsWith('_') &&
    key !== 'data' &&
    key !== 'config' &&
    key !== 'engine' &&
    key !== 'dataCache' &&
    key !== 'inputContent' &&
    !key.includes('template')
  const content = (key, value) => renderDetails(key, value)
  return renderKeys(data, filter, content)
}
