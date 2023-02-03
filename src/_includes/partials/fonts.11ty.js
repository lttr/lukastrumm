const { html } = require('../../_lib/html')
const inline = require('../../_lib/inline')

const base64Font = inline('./src/fonts/charter_regular-optimized')
const fontUrl = `data:font/woff2;charset=utf-8;base64,${base64Font}`

function fonts() {
  return html`
    <link
      rel="preload"
      href="/fonts/charter_regular.woff2"
      as="font"
      type="font/woff2"
      crossorigin
    />
    <link
      rel="preload"
      href="/fonts/charter_italic.woff2"
      as="font"
      type="font/woff2"
      crossorigin
    />
    <link
      rel="preload"
      href="/fonts/charter_bold.woff2"
      as="font"
      type="font/woff2"
      crossorigin
    />
    <link
      rel="preload"
      href="/fonts/firamono_regular_latin.woff2"
      as="font"
      type="font/woff2"
      crossorigin
    />
    <link
      rel="preload"
      href="/fonts/raleway_semibold-optimized.woff2"
      as="font"
      type="font/woff2"
      crossorigin
    />
    <style>
      @font-face {
        font-family: Charter;
        src: url('${fontUrl}') format('woff2');
        font-style: normal;
        font-weight: normal;
        font-stretch: normal;
        font-display: fallback;
      }
      @font-face {
        font-family: Charter;
        src: url('/fonts/charter_italic.woff2') format('woff2');
        font-style: italic;
        font-weight: normal;
        font-stretch: normal;
        font-display: swap;
      }
      @font-face {
        font-family: Charter;
        src: url('/fonts/charter_bold.woff2') format('woff2');
        font-style: normal;
        font-weight: bold;
        font-stretch: normal;
        font-display: swap;
      }
      @font-face {
        font-family: Fira Mono;
        src: url('/fonts/firamono_regular_latin.woff2') format('woff2');
        font-style: normal;
        font-weight: normal;
        font-stretch: normal;
        font-display: swap;
      }
      @font-face {
        font-family: Raleway;
        src: url('/fonts/raleway_semibold-optimized.woff2') format('woff2');
        font-style: normal;
        font-weight: 600;
        font-stretch: normal;
        font-display: swap;
      }
    </style>
    <script>
      const baseFontRegular = new FontFace(
        'Charter',
        'url(/fonts/charter_regular.woff2)',
        {
          family: 'Charter',
          style: 'normal',
          weight: 'normal',
          stretch: 'normal',
          display: 'swap',
        }
      )
      baseFontRegular.load().then((font) => {
        document.fonts.add(font)
      })
    </script>
  `
}

module.exports = fonts
