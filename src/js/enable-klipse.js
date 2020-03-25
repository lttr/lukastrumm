const klipseEvalHtml = document.querySelector('.klipse-eval-html')
window.klipse_settings = {
  selector_eval_js: '.klipse-eval-js', // css selector for the html elements you want to klipsify
  selector_eval_html: '.klipse-eval-html', // css selector for the html elements you want to klipsify
  editor_type: klipseEvalHtml ? 'html' : 'codemirror',
}

const klipseFallbacks = Array.from(
  document.querySelectorAll('.klipse-fallback')
)

for (const fallback of klipseFallbacks) {
  fallback.style.display = 'none'
}

const klipseActual = Array.from(document.querySelectorAll('.klipse-actual'))

for (const actual of klipseActual) {
  actual.style.display = 'block'
}
