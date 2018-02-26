//
// Build script for site lukastrumm.com
//

const DEBUG = true
const DEV_BUILD = (process.env.NODE_ENV || '') !== 'production'

const path = require('path')

const dirs = {
  base: path.join(__dirname, '/'),
  lib: path.join(__dirname, '/lib/'),
  source: './src/',
  content: './src/content/',
  dest: './build/'
}

const assets = require('metalsmith-assets')
const collections = require('metalsmith-collections')
const debugui = require('metalsmith-debug-ui')
const excerpts = require('metalsmith-better-excerpts')
const headings = require('metalsmith-headings')
const layouts = require('metalsmith-layouts')
const markdown = require('metalsmith-markdown')
const metalsmith = require('metalsmith')
const permalinks = require('metalsmith-permalinks')
const publish = require('metalsmith-publish')
const rssfeed = require('metalsmith-feed')
const tags = require('metalsmith-tags')

const siteMeta = {
  site: {
    devBuild: DEV_BUILD,
    author: 'Lukas Trumm',
    email: 'lukas.trumm~gmail.com',
    github: 'https://github.com/lttr/',
    lastEditYear: 2018,
    poweredByWeb: 'https://www.metalsmith.io/',
    runOnWeb: 'https://www.netlify.com/',
    domain: DEV_BUILD ? 'http://localhost' : 'https://lukastrumm.com',
    root: '/'
  }
}

const templateConfig = {
  engine: 'handlebars',
  directory: dirs.source + 'template/',
  partials: dirs.source + 'partials/',
  default: 'article.hbs'
}

const collectionsConfig = {
  pages: {
    sortBy: 'priority',
    reverse: true,
    refer: false
  },
  articles: {
    pattern: 'articles/*/*.md',
    sortBy: 'date',
    reverse: true,
    refer: true,
    limit: 50
  },
  topics: {
    pattern: 'topics/**/*',
    sortBy: 'date',
    reverse: true,
    refer: true,
    limit: 50
  }
}

const tagsConfig = {
  handle: 'tags',
  path: 'topics/:tag/index.html',
  layout: 'list-of-topics.hbs',
  sortBy: 'date',
  reverse: true,
  slug: { mode: 'rfc3986' }
}

const excerptsConfig = {
  moreRegExp: /\s*<!--\s*more\s*-->/i,
  stripTags: true,
  pruneLength: 300,
  pruneString: '…'
}

const markdownConfig = {
  smartypants: true,
  gfm: true,
  tables: true
}

const headingsConfig = {
  selectors: ['h2', 'h3']
}

const linksConfig = {
  pattern: ':mainCollection/:title'
}

console.log(`${DEV_BUILD ? '[Development]' : '[Production]'} build started.`)

// Build a site for me ...
const site = metalsmith(dirs.base)
  // start with clean destination
  .clean(true)
  // and generate from directory
  .source(dirs.content)
  // to directory
  .destination(dirs.dest)
  // while using global metadata
  .metadata(siteMeta)
  // and providing me control over publishing
  .use(publish())
  // create pages for tagged content
  .use(tags(tagsConfig))
  // create virtual collections of files
  .use(collections(collectionsConfig))
  // convert each markdown file from source into html
  .use(markdown(markdownConfig))
  // and put headings into metadata
  .use(headings(headingsConfig))
  // extract some excerpts for articles
  .use(excerpts(excerptsConfig))
  // and make pages available at logical locations
  .use(permalinks(linksConfig))

// Show me what is going on
if (DEBUG && DEV_BUILD) {
  site.use(debugui.report('Before layouts'))
}

site
  // and merge my content with templates
  .use(layouts(templateConfig))
  // make feed for machines to understand
  .use(rssfeed({
    collection: 'articles',
    site_url: site.domain + (siteMeta.rootpath || ''),
    title: site.name,
    description: site.desc
  }))
  // dont forget about other frontend assets
  .use(assets({
    source: dirs.source + 'assets/',
    destination: './'
  }))
  // and finally save the hard work!
  .build(error => {
    if (error) {
      console.log(error)
    } else {
      console.log('Site build successfully.')
    }
  })
