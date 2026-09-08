module.exports = {
  layout: "layouts/tip",
  eleventyComputed: {
    permalink: (data) => `/tips/${data.slug || data.page.fileSlug}/`,
  },
}
