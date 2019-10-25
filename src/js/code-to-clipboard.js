const preNodes = Array.from(document.querySelectorAll('pre[class*="language-"]'))


preNodes.forEach((preNode, index) => {
  if (preNode.firstChild.tagName.toLowerCase() === 'code') {
    const codeNode = preNode.firstChild
    const button = document.createElement('button')
    const id = `copy-${index}`

    button.dataset.clipboardTarget = `#${id}`
    button.title = 'Copy to clipboard'
    button.classList.add('copy-to-clipboard-button')
    button.textContent = 'copy'
    button.style.width = '3.5em'

    codeNode.id = id

    preNode.style.position = 'relative'
    preNode.insertAdjacentElement('afterbegin', button)
  }
})

const clipboard = new ClipboardJS('.copy-to-clipboard-button')

clipboard.on('success', (e) => {
  e.trigger.textContent = 'done'
  setTimeout(() => {
    e.trigger.textContent = 'copy'
  }, 3000)
  e.clearSelection();
})