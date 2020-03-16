window.klipse_settings = {
  selector_eval_js: '.klipse-eval-js', // css selector for the html elements you want to klipsify
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
