const fetch = require('node-fetch')

const {
  getCachedData,
  setCacheData,
  getOncePerDayCacheKey,
} = require('../_lib/cache')

const reposUrl =
  'https://api.github.com/repos/lttr/learning-progress/issues?state=all&per_page=100'
const specialHeader = {
  // this header is required for fields in preview version
  // (topics property)
  Accept: 'application/vnd.github.mercy-preview+json',
}

module.exports = async function () {
  const { cachedData, cache } = getCachedData(
    'learning-progress-issues',
    getOncePerDayCacheKey()
  )

  if (!cachedData) {
    console.log('Fetching github issues.')

    const response = await fetch(reposUrl, {
      headers: specialHeader,
    })
    const newData = await response.json()

    // I'm only interested in issues that I have created
    const filteredData = newData.filter((x) => x.user.login === 'lttr')

    setCacheData(cache, getOncePerDayCacheKey(), filteredData)
    return filteredData
  }

  return cachedData
}
