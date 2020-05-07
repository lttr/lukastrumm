module.exports = {
  data: {
    layout: null,
    permalink: '/sitemap.xml',
    eleventyExcludeFromCollections: true,
  },

  render(data) {
    return `<?xml version="1.0" encoding="utf-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${data.collections.all
  .filter((page) => !page.url.startsWith('/_') && !page.url.endsWith('.json'))
  .map(({ url, date }) => ({ url, date }))
  .sort((a, b) => a.url.localeCompare(b.url))
  .map(({ url, date }) => {
    return `
  <url>
    <loc>${data.metadata.url}${this.url(url)}</loc>
    <lastmod>${date.toISOString().slice(0, 10)}</lastmod>
  </url>
  `
  })}
</urlset>`
  },
}
