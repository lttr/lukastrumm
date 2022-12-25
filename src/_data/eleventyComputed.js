module.exports = {
  // Exclude all content with `draft: true` from the build
  eleventyExcludeFromCollections: (data) => {
    return process.env.ELEVENTY_ENV === 'production' ? data.draft : false
  },
}
