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
      '<pre class="language-js klipse-fallback">'
    )
    newResult = `
        ${originalResult}
        ${klipseFallback}
        <pre class="klipse-actual" style="display: none;">
          <code class="language-js klipse-eval-js">
            ${tokens[idx].content}
          </code>
        </pre>
      `
  }
  return newResult
}

module.exports = (md = {}, options = {}) => {
  const codeBlockRender = md.renderer.rules.code_block
  const fenceRender = md.renderer.rules.fence
  md.renderer.rules.code_block = enhance(codeBlockRender, options)
  md.renderer.rules.fence = enhance(fenceRender, options)
}
