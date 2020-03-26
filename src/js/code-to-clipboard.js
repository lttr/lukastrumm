const preElements = Array.from(
  document.querySelectorAll('pre[class*="language-"]:not(.klipse-actual)')
)

preElements.forEach((preElement, index) => {
  const codeElement = preElement.querySelector('code[class*="language-"]')
  if (codeElement) {
    const wrapperElement = document.createElement('div')
    wrapperElement.classList.add('code-wrapper')

    const button = document.createElement('button')
    const id = `copy-${index}`

    button.dataset.clipboardTarget = `#${id}`
    button.title = 'Copy to clipboard'
    button.classList.add('copy-to-clipboard-button')
    button.textContent = 'copy'
    button.style.width = '3.5em'

    codeElement.id = id

    wrapperElement.style.position = 'relative'
    wrapperElement.insertAdjacentElement('afterbegin', button)

    preElement.insertAdjacentElement('beforebegin', wrapperElement)
    wrapperElement.appendChild(preElement)
  }
})

const clipboard = new ClipboardJS('.copy-to-clipboard-button')

clipboard.on('success', (e) => {
  e.trigger.textContent = 'done'
  setTimeout(() => {
    e.trigger.textContent = 'copy'
  }, 2000)
  e.clearSelection()
})
