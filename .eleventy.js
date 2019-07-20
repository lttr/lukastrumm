const inclusiveLangPlugin = require('@11ty/eleventy-plugin-inclusive-language')

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

  eleventyConfig.addPlugin(inclusiveLangPlugin)

  return {
    templateFormats: ['11ty.js', 'md', 'css', 'jpg', 'png'],
  }
}
