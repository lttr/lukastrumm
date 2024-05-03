const { html, raw } = require("../_lib/html")

const enhance =
  (render) =>
  (...args) => {
    // args = [tokens, idx, options, env, slf]
    const [tokens = {}, idx = 0] = args
    const infostring = tokens[idx].info
    const doRun = infostring.includes("{run}")
    const originalResult = render.apply(this, args)
    let newResult = originalResult
    if (doRun) {
      const langMatches = infostring.match(/(\w+)/)
      let lang = langMatches ? langMatches[1] : ""
      if (lang === "javascript") {
        lang = "js"
      }
      const klipseFallback = originalResult.replace(
        /<pre[^>]*>/,
        `<pre class="klipse-fallback language-${lang}">`,
      )
      const trimmedContent = tokens[idx].content.trim()
      const preClasses = `klipse-actual language-${lang}`
      const codeClasses = `klipse-eval-${lang} language-${lang}`
      const editorType = lang === "html" ? "html" : "code-mirror"
      newResult = html`
        ${raw`${klipseFallback}`}
        <pre
          class="${preClasses}"
          data-editor-type="${editorType}"
        ><code class="${codeClasses}">
      ${lang === "html" ? trimmedContent : trimmedContent}
      </code></pre>
      `.toString()
    }
    return newResult
  }

module.exports = (md = {}, options = {}) => {
  const codeBlockRender = md.renderer.rules.code_block
  const fenceRender = md.renderer.rules.fence
  md.renderer.rules.code_block = enhance(codeBlockRender, options)
  md.renderer.rules.fence = enhance(fenceRender, options)
}
