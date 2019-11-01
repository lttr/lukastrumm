module.exports = {
  data: {
    permalink: 'index.json',
  },

  render(data) {
    const content = data.collections.all.map(item => item.fileSlug)
    return JSON.stringify(content)
  },
}
