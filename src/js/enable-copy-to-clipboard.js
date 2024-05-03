const preElements = Array.from(
  document.querySelectorAll('pre[class*="language-"]:not(.klipse-actual)')
)

preElements.forEach((preElement) => {
  const codeElement = preElement.querySelector(
    'pre:not(.klipse-actual) > code[class*="language-"]'
  )
  if (codeElement) {
    const wrapperElement = document.createElement('div')
    wrapperElement.classList.add('code-wrapper')

    const button = document.createElement('button')
    button.title = 'Copy to clipboard'
    button.classList.add('copy-to-clipboard-button')
    button.textContent = 'copy'
    button.style.width = '3.5em'

    button.addEventListener('click', () => {
      const result = copyToClipboard(codeElement.innerText)
      if (result) {
        button.textContent = 'done'
        setTimeout(() => {
          button.textContent = 'copy'
        }, 2000)
      }
    })

    wrapperElement.style.position = 'relative'
    wrapperElement.insertAdjacentElement('afterbegin', button)

    preElement.insertAdjacentElement('beforebegin', wrapperElement)
    wrapperElement.appendChild(preElement)
  }
})

/**
 * Source: https://stackoverflow.com/a/53951634
 *
 * Copy a string to clipboard
 * @param  {String} string         The string to be copied to clipboard
 * @return {Boolean}               returns a boolean correspondent to the success of the copy operation.
 */
function copyToClipboard(string) {
  let textarea
  let result

  try {
    textarea = document.createElement('textarea')
    textarea.setAttribute('readonly', true)
    textarea.setAttribute('contenteditable', true)
    textarea.style.position = 'fixed' // prevent scroll from jumping to the bottom when focus is set.
    textarea.value = string

    document.body.appendChild(textarea)

    textarea.focus()
    textarea.select()

    const range = document.createRange()
    range.selectNodeContents(textarea)

    const sel = window.getSelection()
    sel.removeAllRanges()
    sel.addRange(range)

    textarea.setSelectionRange(0, textarea.value.length)
    result = document.execCommand('copy')
  } catch (err) {
    console.error(err)
    result = null
  } finally {
    document.body.removeChild(textarea)
  }

  // manual copy fallback using prompt
  if (!result) {
    const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0
    const copyHotkey = isMac ? '⌘C' : 'CTRL+C'
    result = prompt(`Press ${copyHotkey}`, string)  
    if (!result) {
      return false
    }
  }
  return true
}
