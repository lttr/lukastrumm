const inclusiveLangPlugin = require('@11ty/eleventy-plugin-inclusive-language')
const pluginRss = require('@11ty/eleventy-plugin-rss')
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')

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

  eleventyConfig.addCollection('notes', function(collection) {
    return collection
      .getAllSorted()
      .filter(item => item.inputPath.includes('notes/'))
      .reverse()
  })

  eleventyConfig.addCollection('nav', function(collection) {
    return collection
      .getFilteredByGlob('./src/pages/0*')
      .sort((a, b) => (a.inputPath > b.inputPath ? 1 : -1))
  })

  eleventyConfig.addPlugin(inclusiveLangPlugin)
  eleventyConfig.addPlugin(pluginRss)
  eleventyConfig.addPlugin(syntaxHighlight)

  return {
    templateFormats: ['11ty.js', 'md', 'css', 'jpg', 'svg', 'png', 'ico'],
  }
}
