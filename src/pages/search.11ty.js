const html = require('../_lib/html')
const { postInline } = require('../_includes/partials/postSnippets.11ty')

function getCategory(url) {
  const firstSegment = url.split('/')[1]
  if (firstSegment) {
    switch (firstSegment) {
      case 'articles':
        return 'article'
      case 'notes':
        return 'note'
      default:
        return firstSegment
    }
  }
}

module.exports = {
  data: {
    title: 'Search',
    permalink: '/search/',
  },

  render(data) {
    return html`
      <style>
        .category {
          display: inline-block;
          font-size: var(--small-font);
          color: var(--primary-color);
          width: 3.5em;
        }
        .search-results,
        .search-results ul {
          padding: 0;
        }
        .search-results li {
          list-style: none;
        }
      </style>
      <section class="center">
        <div class="search-wrapper">
          <p>
            <input
              type="search"
              id="search-input"
              class="search-input"
              autofocus
            />
          </p>
        </div>
        <div class="search-results">
          <ul id="search-results-list"></ul>
        </div>
        <template id="results-template">
          <li>
            <span class="category"></span>
            <a href=""></a>
            <span>
              ...<span class="search-text-start"></span
              ><em class="search-match"></em
              ><span class="search-text-end"></span>...
            </span>
          </li>
        </template>

        <noscript>
          <iframe
            src="https://duckduckgo.com/search.html?duck=yes&site=lukastrumm.com&prefill=Search lukastrumm.com&focus=yes"
            style="overflow:auto;margin:1rem;padding:1rem;width:593px;height:60px;"
            frameborder="0"
          ></iframe>
        </noscript>
      </section>

      <div class="search-results" style="margin-top: 0">
        <ul id="initial-list">
          ${data.collections.posts.map((post) => {
            const url = post.data.page.url
            const category = getCategory(url)
            return html`
              <li>
                <span class="category">${category}</span>${postInline(
                  post.data,
                  false
                )}
              </li>
            `
          })}
          ${data.collections.tagList.sort().map((tag) => {
            const url = `/tag/${tag}`
            return html`
              <li>
                <span class="category">${getCategory(url)}</span>
                <a href="${url}" class="tag-badge">${tag}</a>
              </li>
            `
          })}
        </ul>
      </div>

      <script>
        const input = document.getElementById('search-input')
        const initialList = document.getElementById('initial-list')
        const results = document.getElementById('search-results-list')
        const resultsTemplate = document.getElementById('results-template')

        function getCategory(url) {
          const firstSegment = url.split('/')[1]
          if (firstSegment) {
            switch (firstSegment) {
              case 'articles':
                return 'article'
              case 'notes':
                return 'note'
              default:
                return firstSegment
            }
          }
        }

        function performSearch(searchIndex) {
          const searchString = input.value
          results.innerHTML = ''
          if (searchString && searchString.length > 2) {
            initialList.hidden = true
            results.hidden = false
            for (const item of searchIndex) {
              if (item.text.includes(searchString)) {
                const searchTextStart = item.text.substring(
                  item.text.indexOf(searchString) - 20,
                  item.text.indexOf(searchString)
                )
                const searchTextEnd = item.text.substr(
                  item.text.indexOf(searchString) + searchString.length,
                  searchString.length + 20
                )
                const template = resultsTemplate.content.cloneNode(true)
                template.querySelector('a').href = item.url
                template.querySelector('a').textContent = item.title
                template.querySelector('.category').textContent = getCategory(
                  item.url
                )
                template.querySelector('.search-match').textContent =
                  searchString
                template.querySelector('.search-text-start').textContent =
                  searchTextStart
                template.querySelector('.search-text-end').textContent =
                  searchTextEnd
                results.appendChild(template)
              }
            }
          } else {
            initialList.hidden = false
            results.hidden = true
          }
        }

        const searchIndex = fetch('/search.json')
          .then((r) => r.json())
          .then((searchIndex) => {
            performSearch(searchIndex)
            input.addEventListener('input', () => {
              performSearch(searchIndex)
            })
          })
      </script>
    `
  },
}
