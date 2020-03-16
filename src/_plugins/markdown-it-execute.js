const enhance = render => (...args) => {
  // args = [tokens, idx, options, env, slf]
  const [tokens = {}, idx = 0] = args
  const infostring = tokens[idx].info
  const doRun = infostring.includes('{run}')
  const originalResult = render.apply(this, args)
  let newResult = originalResult
  if (doRun) {
    const klipseFallback = originalResult.replace(
      /<pre[^>]*>/,
      '<pre class="klipse-fallback language-js">'
    )
    newResult = [
      klipseFallback,
      '<pre class="klipse-actual language-js" style="display: none;">',
      '<code class="klipse-eval-js language-js">',
      tokens[idx].content.trim(),
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
