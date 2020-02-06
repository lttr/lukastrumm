const klipseFallbacks = Array.from(
  document.querySelectorAll('.klipse-fallback')
)

for (const fallback of klipseFallbacks) {
  fallback.style.display = 'none'
}

const klipseActual = Array.from(document.querySelectorAll('.klipse-actual'))

for (const fallback of klipseActual) {
  fallback.style.display = 'block'
}
