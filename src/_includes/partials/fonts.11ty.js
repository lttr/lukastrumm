const html = require('viperhtml').wire()

module.exports = () => html`
  <!--
  Preloading is a little bit faster, but the disadvantage
  is that there are multiple font reflows - every time the browser
  finishes downloading a font
  <link
    rel="preload"
    href="/fonts/raleway_semibold_optimized.woff2"
    as="font"
    type="font/woff2"
    crossorigin
  /> -->
  <script>
    async function loadFonts() {
      const baseFontRegular = new FontFace(
        'Charter',
        'url(/fonts/charter_regular-webfont.woff2)',
        {
          family: 'Charter',
          style: 'normal',
          weight: 'normal',
          stretch: 'normal',
        }
      )
      const baseFontItalic = new FontFace(
        'Charter',
        'url(/fonts/charter_italic-webfont.woff2)',
        {
          family: 'Charter',
          style: 'italic',
          weight: 'normal',
          stretch: 'normal',
        }
      )
      const monoFont = new FontFace(
        'Fira Mono',
        'url(/fonts/firamono_regular_latin.woff2)',
        {
          family: 'Fira Mono',
          style: 'normal',
          weight: 'normal',
          stretch: 'normal',
        }
      )
      const headingFont = new FontFace(
        'Raleway',
        'url(/fonts/raleway_semibold_latin.woff2)',
        {
          family: 'Raleway',
          style: 'normal',
          weight: 600,
          stretch: 'normal',
        }
      )

      Promise.all([
        baseFontRegular.load(),
        baseFontItalic.load(),
        monoFont.load(),
        headingFont.load(),
      ]).then((fonts) => {
        for (const font of fonts) {
          document.fonts.add(font)
          document.body.classList.remove('fonts-not-yet-loaded')
        }
      })
    }

    loadFonts()
  </script>
`
