module.exports = function(eleventyConfig) {
  eleventyConfig.addCollection('articles', function(collection) {
    return collection
      .getAllSorted()
      .filter((item) => item.inputPath.includes('articles/'))
      .reverse()
  })

  eleventyConfig.addCollection('blog', function(collection) {
    return collection
      .getAllSorted()
      .filter((item) => item.inputPath.includes('blog/'))
      .reverse()
  })
}
