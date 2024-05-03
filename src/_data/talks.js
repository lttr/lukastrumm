const fetch = require("node-fetch")
const matter = require("gray-matter")

const {
  getCachedData,
  setCacheData,
  getOncePerDayCacheKey,
} = require("../_lib/cache")

// Example output from gray-matter:
//
// const parsedReadmes = [{
//     content: '...',
//     data: {
//       title: 'Web performance with nuxt',
//       date: 2024-04-25T00:00:00.000Z,
//       lang: 'czech'
//     },
//     isEmpty: false,
//     excerpt: '\n' +
//       "I'll start with the theoretical foundation of web performance, what Core Web Vitals are, and how performance is measured. Then, I'll discuss the benefits and pitfalls of JS frameworks and demonstrate some specific techniques for Nuxt.\n" +
//       '\n'
//   } ]

module.exports = async function () {
  const { cachedData, cache } = getCachedData("talks", getOncePerDayCacheKey())

  if (!cachedData) {
    console.log("Fetching talks data from Github.")

    const owner = "lttr"
    const repo = "talks"
    const branch = "master"
    const fileName = "README.md"
    const aTalkDirectoryPattern = /^\d{4}-.*$/

    const url = (path = "") =>
      `https://api.github.com/repos/${owner}/${repo}/contents/${path}`

    const downloadUrl = (path) =>
      `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${path}/${fileName}`

    try {
      const response = await fetch(url())
      const data = await response.json()

      const talkDirectories = data.filter((directory) => {
        return directory.name.match(aTalkDirectoryPattern)
      })

      const talkPaths = talkDirectories.map((dir) => dir.name)
      const readmeUrls = talkPaths.map((talkPath) => downloadUrl(talkPath))

      const readmePromises = readmeUrls.map((url) => fetch(url))
      const readmeResults = await Promise.all(readmePromises)

      const readmes = []
      for (const readme of readmeResults) {
        const readmeText = await readme.text()
        readmes.push(readmeText)
      }

      const parsedReadmes = readmes.map((readme) => {
        return matter(readme, { excerpt: true })
      })

      const newData = []
      talkPaths.forEach((slug, i) => {
        newData.push({
          ...parsedReadmes[i],
          slug,
        })
      })

      setCacheData(cache, getOncePerDayCacheKey(), newData)
      return newData
    } catch (error) {
      console.error("Error fetching README files:", error)
      throw error
    }
  }

  return cachedData
}
