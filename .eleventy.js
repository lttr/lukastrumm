const inclusiveLangPlugin = require('@11ty/eleventy-plugin-inclusive-language')
const pluginRss = require('@11ty/eleventy-plugin-rss')
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const markdownIt = require('markdown-it')
const markdownItFootnote = require('markdown-it-footnote')
const markdownItAbbr = require('markdown-it-abbr')
const markdownItAnchor = require('markdown-it-anchor')
const markdownItToc = require('markdown-it-table-of-contents')

module.exports = function(eleventyConfig) {
  // Copy files

  eleventyConfig.addPassthroughCopy('src/js')
  eleventyConfig.addPassthroughCopy('src/css')
  eleventyConfig.addPassthroughCopy('src/images')
  eleventyConfig.addPassthroughCopy('favicon.ico')

  // Create collections

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

  eleventyConfig.addCollection('posts', function(collection) {
    return collection
      .getAllSorted()
      .filter(
        item =>
          item.inputPath.includes('articles/') ||
          item.inputPath.includes('blog/') ||
          item.inputPath.includes('notes/')
      )
      .reverse()
  })

  eleventyConfig.addCollection('nav', function(collection) {
    return collection
      .getFilteredByGlob('./src/pages/0*')
      .sort((a, b) => (a.inputPath > b.inputPath ? 1 : -1))
  })

  eleventyConfig.addCollection('tagList', getTagList)

  // Configure front matter

  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
  })

  // Configure markdown

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

  // Add plugins

  eleventyConfig.addPlugin(inclusiveLangPlugin)
  eleventyConfig.addPlugin(pluginRss)
  eleventyConfig.addPlugin(syntaxHighlight)

  return {
    // Configure used template formats
    templateFormats: ['11ty.js', 'md'],
  }
}

function getTagList(collection) {
  return [
    ...new Set(
      collection
        .getAll()
        .filter(item => Array.isArray(item.data.tags))
        .flatMap(item => item.data.tags)
    ),
  ]
}
