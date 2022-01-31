const enhance =
  (render) =>
  (...args) => {
    // args = [tokens, idx, options, env, slf]
    const [tokens = {}, idx = 0] = args
    const originResult = render.apply(this, args)
    let newResult = originResult
    const infostring = tokens[idx].info
    if (infostring === '') {
      const defaultType = 'text'
      newResult = originResult.replace(
        /<pre[^>]*>/,
        `<pre class="language-${defaultType}">`
      )
    }
    return newResult
  }

module.exports = (md = {}, options = {}) => {
  const codeBlockRender = md.renderer.rules.code_block
  const fenceRender = md.renderer.rules.fence
  md.renderer.rules.code_block = enhance(codeBlockRender, options)
  md.renderer.rules.fence = enhance(fenceRender, options)
}
