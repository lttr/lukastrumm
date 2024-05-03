const { html, raw } = require("../_lib/html")

const enhance =
  (render) =>
  (...args) => {
    // args = [tokens, idx, options, env, slf]
    const [tokens = {}, idx = 0] = args
    const infostring = tokens[idx].info
    const isMermaid = infostring.startsWith("mermaid")
    const caption = tokens[idx].info.split("//")[1]
    const originalResult = render.apply(this, args)
    let newResult = originalResult
    if (isMermaid) {
      // https://github.com/mermaid-js/mermaid/issues/580
      const linkStyleBasis = `linkStyle default interpolate basis;`
      let diagramText = tokens[idx].content
      if (
        !diagramText.includes(linkStyleBasis) &&
        diagramText.startsWith("graph")
      ) {
        diagramText = diagramText.replace("\n", `\n${linkStyleBasis}\n`)
      }

      const approxHeight = diagramText.split("\n").length * 40
      const styles = `
      min-height: ${approxHeight}px;
      ${process.env.DEV ? "" : "visibility: hidden;"}
    `
      newResult = html`
        <figure>
          <pre class="mermaid" style="${styles}">
            ${diagramText}
        </pre
          >
          <figcaption>${caption ? raw`${caption}` : ""}</figcaption>
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
