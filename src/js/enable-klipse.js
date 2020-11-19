window.klipse_settings = {
  no_dynamic_scripts: false,
  selector_eval_js: '.klipse-eval-js', // css selector for the html elements you want to klipsify
  selector_eval_html: '.klipse-eval-html', // css selector for the html elements you want to klipsify
  editor_type: 'html',
}

const klipseFallbacks = Array.from(
  document.querySelectorAll('.klipse-fallback')
)

for (const fallback of klipseFallbacks) {
  const wrapper = fallback.closest('.code-wrapper')

  const editCodeButton = document.createElement('button')
  editCodeButton.classList.add('run-code-button')
  editCodeButton.classList.add('button')
  editCodeButton.textContent = 'Edit code'

  editCodeButton.addEventListener('click', () => {
    fallback.style.display = 'none'
    if (wrapper) {
      wrapper.style.display = 'none'
    }
    const klipseActual = wrapper.nextElementSibling
    klipseActual.classList.add('active')
  })

  const cancelCodeButton = document.createElement('button')
  cancelCodeButton.classList.add('run-code-button', 'cancel-code-button')
  cancelCodeButton.classList.add('button')
  cancelCodeButton.textContent = 'Cancel editing code'

  cancelCodeButton.addEventListener('click', () => {
    fallback.style.display = 'block'
    if (wrapper) {
      wrapper.style.display = 'block'
    }
    const klipseActual = wrapper.nextElementSibling
    klipseActual.classList.remove('active')
  })

  fallback.insertAdjacentElement('afterend', editCodeButton)
  wrapper.nextElementSibling.insertAdjacentElement(
    'beforeend',
    cancelCodeButton
  )

  // 'execute' html

  const htmlContent = fallback.querySelector('code.language-html')
  if (htmlContent) {
    fallback.insertAdjacentHTML(
      'beforeend',
      `<hr><div class="code-result">${htmlContent.textContent}</div>`
    )
  }
}
