module.exports = function(eleventyConfig) {
  eleventyConfig.addCollection('articles', function(collection) {
    return collection
      .getAllSorted()
      .filter(item => item.inputPath.includes('articles/'))
      .reverse()
  })

  eleventyConfig.addCollection('blog', function(collection) {
    return collection
      .getAllSorted()
      .filter(item => item.inputPath.includes('blog/'))
      .reverse()
  })

  eleventyConfig.addCollection('nav', function(collection) {
    return collection
      .getAllSorted()
      .filter(item => item.inputPath.includes('pages/'))
  })

  eleventyConfig.addPassthroughCopy('src/css')
}
