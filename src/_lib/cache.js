const path = require("path")
const flatCache = require("flat-cache")

const dataCacheDir = ".datacache"

function getCachedData(name, key) {
  const cache = flatCache.load(name, path.resolve(dataCacheDir))
  const cachedData = cache.getKey(key)
  return {
    cachedData,
    cache,
  }
}

function setCacheData(cache, key, data) {
  cache.setKey(key, data)
  cache.save()
}

function getOncePerDayCacheKey() {
  const date = new Date()
  return `${date.getUTCFullYear()}-${
    date.getUTCMonth() + 1
  }-${date.getUTCDate()}`
}

function getOncePerHourCacheKey() {
  const date = new Date()
  return `${date.getUTCFullYear()}-${
    date.getUTCMonth() + 1
  }-${date.getUTCDate()}-${date.getUTCHours()}`
}

module.exports = {
  getCachedData,
  setCacheData,
  getOncePerDayCacheKey,
  getOncePerHourCacheKey,
}
