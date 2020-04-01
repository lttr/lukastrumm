const html = require('viperhtml').wire()

module.exports = () => html`
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

      await baseFontRegular.load()
      await baseFontItalic.load()
      await monoFont.load()
      await headingFont.load()

      document.fonts.add(baseFontRegular)
      document.fonts.add(baseFontItalic)
      document.fonts.add(monoFont)
      document.fonts.add(headingFont)

      document.body.classList.remove('fonts-not-yet-loaded')
    }

    loadFonts()
  </script>
`
