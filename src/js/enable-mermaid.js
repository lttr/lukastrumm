mermaid.initialize({
  startOnLoad: true,
  theme: 'neutral',
  nodeSpacing: 40,
  rankSpacing: 30,
})

document.querySelectorAll('.mermaid').forEach(element => {
  element.hidden = false
})
