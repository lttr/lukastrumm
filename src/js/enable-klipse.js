window.klipse_settings = {
  no_dynamic_scripts: false,
  selector_eval_js: '.klipse-eval-js', // css selector for the html elements you want to klipsify
  selector_eval_html: '.klipse-eval-html', // css selector for the html elements you want to klipsify
  editor_type: 'html',
}

const klipseFallbacks = Array.from(
  document.querySelectorAll('.klipse-fallback')
)

const klipseActual = Array.from(document.querySelectorAll('.klipse-actual'))

for (const fallback of klipseFallbacks) {
  const button = document.createElement('button')
  button.classList.add('run-code-button')
  button.classList.add('button')
  button.textContent = 'Run code'

  button.addEventListener('click', () => {
    const wrapper = fallback.closest('.code-wrapper')
    fallback.style.display = 'none'
    if (wrapper) wrapper.style.display = 'none'
    wrapper.nextElementSibling.classList.add('active')
  })
  fallback.insertAdjacentElement('afterend', button)
}
