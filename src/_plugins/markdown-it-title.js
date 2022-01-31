const enhance =
  (render) =>
  (...args) => {
    // args = [tokens, idx, options, env, slf]
    const [tokens = {}, idx = 0] = args
    const infostring = tokens[idx].info
    const titleMatch = infostring.match(/\[(?<title>[a-zA-Z0-9 ]+)\]/)
    let title = null
    if (titleMatch && titleMatch.groups && titleMatch.groups.title) {
      title = titleMatch.groups.title
    }
    const originResult = render.apply(this, args)
    let newResult = originResult
    if (title) {
      newResult = originResult.replace(
        /<pre[^>]*>/,
        `$&<h2 class="title">${title}</h2>`
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
