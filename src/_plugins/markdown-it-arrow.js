var ARROW_REGEXP = /->/

function arrow(state) {
  for (const token of state.tokens) {
    if (token.type !== 'inline') {
      continue
    }
    if (ARROW_REGEXP.test(token.content)) {
      replaceInTokens(token.children)
    }
  }
}

function replaceInTokens(inlineTokens) {
  for (const token of inlineTokens) {
    if (token.type === 'text') {
      if (ARROW_REGEXP.test(token.content)) {
        token.content = token.content.replace(
          /(?<=[^-])-?->(?=[^>]|$)/gm,
          '\u2799' // ➙ U+2799 HEAVY RIGHTWARDS ARROW
        )
      }
    }
  }
}

module.exports = (md) => {
  md.core.ruler.before('replacements', 'arrow', arrow)
}
