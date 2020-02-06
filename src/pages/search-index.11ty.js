module.exports = {
  data: {
    permalink: '/search.json',
  },

  render(data) {
    const searchIndex = []
    for (const item of data.collections.posts) {
      searchIndex.push({
        url: item.url,
        title: item.data.title,
        text:
          item.data.title.toLowerCase() +
          ' ' +
          cleanTemplate(item.templateContent),
      })
    }
    return JSON.stringify(searchIndex)
  },
}

function cleanTemplate(content) {
  let text = content.toLowerCase()
  // replace html tags and newlines with spaces all html elements
  text = unescape(text.replace(/<.*?>|&lt;.*?&gt;|\n/gi, ' '))
  // remove duplicated words
  text = [...new Set(text.split(' '))].join(' ')
  // remove short and less meaningful words
  text = text.replace(
    /\b([0-9]|the|a|an|and|am|you|I|to|if|of|off|me|my|on|in|it|is|at|as|we|do|be|has|but|was|so|no|not|or|up|for)\b/gi,
    ''
  )
  // remove punctuation
  text = text.replace(/\.|\,|:|\?|-|—|#|\(|\)/g, '')
  //remove repeated spaces
  text = text.replace(/[ ]{2,}/g, ' ')
  return text
}
