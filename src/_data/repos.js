const fetch = require('node-fetch')

const {
  getCachedData,
  setCacheData,
  getOncePerDayCacheKey,
} = require('../_lib/cache')

const reposUrl = 'https://api.github.com/users/lttr/repos'
const specialHeader = {
  // this header is required for fields in preview version
  // (topics property)
  Accept: 'application/vnd.github.mercy-preview+json',
}

module.exports = async function () {
  const { cachedData, cache } = getCachedData(
    'github-repos',
    getOncePerDayCacheKey()
  )

  if (!cachedData) {
    console.log('Fetching github repos.')

    const response = await fetch(reposUrl, {
      headers: specialHeader,
    })
    const newData = await response.json()

    setCacheData(cache, getOncePerDayCacheKey(), newData)
    return newData
  }

  return cachedData
}
