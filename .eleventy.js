const inclusiveLangPlugin = require('@11ty/eleventy-plugin-inclusive-language')
const pluginRss = require('@11ty/eleventy-plugin-rss')
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const markdownIt = require('markdown-it')
const markdownItFootnote = require('markdown-it-footnote')
const markdownItAbbr = require('markdown-it-abbr')
const markdownItAnchor = require('markdown-it-anchor')
const markdownItToc = require('markdown-it-table-of-contents')

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

  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
  })

  const markdownOptions = {
    html: true,
    breaks: true,
    linkify: true,
    typographer: true,
  }
  eleventyConfig.setLibrary(
    'md',
    markdownIt(markdownOptions)
      .use(markdownItFootnote)
      .use(markdownItAbbr)
      .use(markdownItAnchor, {
        level: [2],
        permalink: true,
        permalinkBefore: false,
      })
      .use(markdownItToc)
  )

  eleventyConfig.addPlugin(inclusiveLangPlugin)
  eleventyConfig.addPlugin(pluginRss)
  eleventyConfig.addPlugin(syntaxHighlight)

  return {
    templateFormats: ['11ty.js', 'md', 'css', 'jpg', 'svg', 'png', 'ico'],
  }
}
