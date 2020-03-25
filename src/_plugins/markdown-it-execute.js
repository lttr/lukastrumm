const enhance = (render) => (...args) => {
  // args = [tokens, idx, options, env, slf]
  const [tokens = {}, idx = 0] = args
  const infostring = tokens[idx].info
  const doRun = infostring.includes('{run}')
  const originalResult = render.apply(this, args)
  let newResult = originalResult
  if (doRun) {
    const langMatches = infostring.match(/(\w+)/)
    let lang = langMatches ? langMatches[1] : ''
    if (lang === 'javascript') {
      lang = 'js'
    }
    const klipseFallback = originalResult.replace(
      /<pre[^>]*>/,
      `<pre class="klipse-fallback language-${lang}">`
    )
    const trimmedContent = tokens[idx].content.trim()
    newResult = [
      klipseFallback,
      `<pre class="klipse-actual language-${lang}" style="display: none;">`,
      `<code class="klipse-eval-${lang} language-${lang}">`,
      lang === 'html' ? htmlEntities(trimmedContent) : trimmedContent,
      '</code>',
      '</pre>',
    ].join('')
  }
  return newResult
}

module.exports = (md = {}, options = {}) => {
  const codeBlockRender = md.renderer.rules.code_block
  const fenceRender = md.renderer.rules.fence
  md.renderer.rules.code_block = enhance(codeBlockRender, options)
  md.renderer.rules.fence = enhance(fenceRender, options)
}

function htmlEntities(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
