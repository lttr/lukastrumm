const enhance = render => (...args) => {
  // args = [tokens, idx, options, env, slf]
  const [tokens = {}, idx = 0] = args
  const infostring = tokens[idx].info
  const isMermaid = infostring.startsWith('mermaid')
  const caption = tokens[idx].info.split('//')[1]
  const originalResult = render.apply(this, args)
  let newResult = originalResult
  if (isMermaid) {
    newResult = `
      <figure>
        <pre class="mermaid" hidden>
            ${tokens[idx].content}
        </pre>
        <figcaption>${caption ? caption : ''}</figcaption>
      </figure>
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
