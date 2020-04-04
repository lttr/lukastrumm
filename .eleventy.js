const glob = require('glob')

const inclusiveLangPlugin = require('@11ty/eleventy-plugin-inclusive-language')
const lazyImagesPlugin = require('eleventy-plugin-lazyimages')
const pluginRss = require('@11ty/eleventy-plugin-rss')
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')

const markdownIt = require('markdown-it')
const markdownItFootnote = require('markdown-it-footnote')
const markdownItAnchor = require('markdown-it-anchor')
const markdownItToc = require('markdown-it-table-of-contents')
const markdownItFigures = require('markdown-it-implicit-figures')

const markdownItExecute = require('./src/_plugins/markdown-it-execute')
const markdownItTitle = require('./src/_plugins/markdown-it-title')
const markdownItMermaid = require('./src/_plugins/markdown-it-mermaid')

module.exports = function (eleventyConfig) {
  // Copy files

  eleventyConfig.addPassthroughCopy(
    'src/{js,blog,notes,articles,labs}/**/*.{html,css,js}'
  )
  eleventyConfig.addPassthroughCopy('src/fonts/*.woff2')
  eleventyConfig.addPassthroughCopy('src/favicon.ico')
  eleventyConfig.addPassthroughCopy({
    'src/**/*.{ico,png,svg,gif,jpg,jpeg}': 'img',
  })

  // Create collections

  eleventyConfig.addCollection('articles', function (collection) {
    return collection
      .getAllSorted()
      .filter((item) => item.inputPath.includes('articles/'))
      .reverse()
  })

  eleventyConfig.addCollection('blog', function (collection) {
    return collection
      .getAllSorted()
      .filter((item) => item.inputPath.includes('blog/'))
      .reverse()
  })

  eleventyConfig.addCollection('notes', function (collection) {
    return collection
      .getAllSorted()
      .filter((item) => item.inputPath.includes('notes/'))
      .reverse()
  })

  eleventyConfig.addCollection('labs', function (collection) {
    return collection
      .getAllSorted()
      .filter((item) => item.inputPath.includes('labs/'))
      .reverse()
  })

  eleventyConfig.addCollection('posts', function (collection) {
    return collection
      .getAllSorted()
      .filter(
        (item) =>
          item.inputPath.includes('articles/') ||
          item.inputPath.includes('blog/') ||
          item.inputPath.includes('notes/')
      )
      .reverse()
  })

  eleventyConfig.addCollection('tagList', getTagList)

  // Configure front matter

  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: '---',
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
      .use(markdownItAnchor, {
        level: [2, 3],
        permalink: true,
        permalinkBefore: false,
        permalinkSymbol: '#',
      })
      .use(markdownItToc, {
        includeLevel: [2],
        containerHeaderHtml: '<div class="toc-heading">Table of content</div>',
      })
      .use(markdownItFigures, {
        figcaption: true,
      })
      // my custom plugins
      .use(markdownItExecute)
      .use(markdownItTitle)
      .use(markdownItMermaid)
  )

  // Configure browser-sync

  eleventyConfig.setBrowserSyncConfig({
    open: true,
    browser: 'firefox',
  })

  // Configure watch mode

  eleventyConfig.addWatchTarget('./src/**/*.js')

  // Add plugins

  eleventyConfig.addPlugin(lazyImagesPlugin, {
    imgSelector: '.post-content img',
    transformImgPath: (relativePath) => {
      // For image paths find the full path relative to project root
      // otherwise lazyImagesPlugin would not be able to locate the image.
      if (relativePath.startsWith('/') || relativePath.startsWith('./')) {
        relativePath = relativePath.replace(/^.*\/(.*)/, '$1')
      }
      const files = glob.sync('src/**/' + relativePath)
      if (Array.isArray(files) && files[0]) {
        relativePath = files[0]
        if (files.length > 1) {
          console.warn('More than one file with the same name was found!')
        }
      }
      return relativePath
    },
  })
  eleventyConfig.addPlugin(inclusiveLangPlugin)
  eleventyConfig.addPlugin(pluginRss)
  eleventyConfig.addPlugin(syntaxHighlight, {
    alwaysWrapLineHighlights: true,
  })

  const highlighter = eleventyConfig.markdownHighlighter
  eleventyConfig.addMarkdownHighlighter((str, language) => {
    if (language === 'mermaid') {
      return `<pre class="mermaid">${str}</pre>`
    }
    return highlighter(str, language)
  })

  return {
    // Configure used template formats
    templateFormats: ['11ty.js', 'md'],
    dir: {
      input: 'src',
      output: 'dist',
    },
  }
}

function getTagList(collection) {
  return [
    ...new Set(
      collection
        .getAll()
        .filter((item) => Array.isArray(item.data.tags))
        .flatMap((item) => item.data.tags)
    ),
  ]
}
