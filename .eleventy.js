const glob = require('glob')

const inclusiveLangPlugin = require('@11ty/eleventy-plugin-inclusive-language')
const lazyImagesPlugin = require('eleventy-plugin-lazyimages')
const pluginRss = require('@11ty/eleventy-plugin-rss')
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const { EleventyEdgePlugin } = require('@11ty/eleventy')

const markdownIt = require('markdown-it')
const markdownItFootnote = require('markdown-it-footnote')
const markdownItAnchor = require('markdown-it-anchor')
const markdownItToc = require('markdown-it-table-of-contents')
const markdownItFigures = require('markdown-it-implicit-figures')

const markdownItKlipse = require('./src/_plugins/markdown-it-klipse')
const markdownItTitle = require('./src/_plugins/markdown-it-title')
const markdownItMermaid = require('./src/_plugins/markdown-it-mermaid')
const markdownItDefaultType = require('./src/_plugins/markdown-it-default-type')
const markdownItArrow = require('./src/_plugins/markdown-it-arrow')
const svgContents = require('eleventy-plugin-svg-contents')

module.exports = function(eleventyConfig) {
  // Ignore files and folders

  eleventyConfig.ignores.add('_drafts/')

  // Copy files

  eleventyConfig.addPassthroughCopy('_redirects')
  eleventyConfig.addPassthroughCopy('src/{blog,notes,talks,labs}/**/*')
  eleventyConfig.addPassthroughCopy('src/css/*.css')
  eleventyConfig.addPassthroughCopy('src/fonts/*.woff2')
  eleventyConfig.addPassthroughCopy('src/js/*.js')
  eleventyConfig.addPassthroughCopy('src/favicon.ico')
  eleventyConfig.addPassthroughCopy('src/robots.txt')
  eleventyConfig.addPassthroughCopy('src/shortcuts/*')
  // All images will be in one folder '/img' because it is easier
  // to manage correct references to them
  eleventyConfig.addPassthroughCopy({
    'src/**/*.{ico,png,svg,gif,jpg,jpeg}': 'img',
  })

  // Create collections

  eleventyConfig.addCollection('blog', collectionByFolders('blog/'))
  eleventyConfig.addCollection('notes', collectionByFolders('notes/'))
  eleventyConfig.addCollection(
    'labs',
    collectionByFolderAndFile('labs/', 'README')
  )
  eleventyConfig.addCollection(
    'talks',
    collectionByFolderAndFile('talks/', 'README')
  )
  eleventyConfig.addCollection('feed', collectionByFolders('blog/'))
  eleventyConfig.addCollection(
    'posts',
    collectionByFolders('blog/', 'labs/', 'notes/')
  )
  eleventyConfig.addCollection('tagList', getTagList)

  // Configure front matter

  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: '---',
  })

  // Configure markdown

  const markdownOptions = {
    html: true,
    breaks: false,
    linkify: true,
    typographer: true,
  }
  const md = markdownIt(markdownOptions)
    .use(markdownItFootnote)
    .use(markdownItAnchor, {
      level: [2, 3],
      permalink: markdownItAnchor.permalink.headerLink(),
    })
    .use(markdownItToc, {
      includeLevel: [2],
      containerHeaderHtml: '<div class="toc-heading">Table of content</div>',
    })
    .use(markdownItFigures, {
      figcaption: true,
    })
    // my custom plugins
    .use(markdownItKlipse)
    .use(markdownItTitle)
    .use(markdownItMermaid)
    .use(markdownItDefaultType)
    .use(markdownItArrow)
  md.renderer.rules.footnote_block_open = () =>
    `<h4 class="footnotes-title">Notes</h4>
<section class="footnotes">
<ol class="footnotes-list">`

  eleventyConfig.setLibrary('md', md)

  // Configure watch mode

  eleventyConfig.addWatchTarget('**/*.md')
  eleventyConfig.addWatchTarget('./src/**/*.js')
  eleventyConfig.addWatchTarget('./src/**/*.css')

  // Add plugins

  eleventyConfig.addPlugin(lazyImagesPlugin, {
    cacheFile: '.datacache/lazyimages',
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
  eleventyConfig.addPlugin(EleventyEdgePlugin)
  eleventyConfig.addPlugin(svgContents)

  // Prism.js does not know mermaid, it has to be processed manually here
  const highlighter = eleventyConfig.markdownHighlighter
  eleventyConfig.addMarkdownHighlighter((str, language) => {
    if (language === 'mermaid') {
      return `<pre class="mermaid">${str}</pre>`
    }
    return highlighter(str, language)
  })

  return {
    // Configure used template formats
    templateFormats: ['11ty.js', 'md', 'njk'],
    dir: {
      input: 'src',
      output: 'dist',
    },
  }
}

function collectionByFolders(...folderNames) {
  return function(collection) {
    return collection
      .getAllSorted()
      .filter((item) =>
        folderNames.some((folderName) => item.inputPath.includes(folderName))
      )
      .reverse()
  }
}

function collectionByFolderAndFile(folderName, fileName) {
  return function(collection) {
    return collection
      .getAllSorted()
      .filter(
        (item) =>
          item.inputPath.includes(folderName) &&
          item.inputPath.includes(fileName)
      )
      .reverse()
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
