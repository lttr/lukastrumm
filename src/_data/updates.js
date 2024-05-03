const git = require("@npmcli/git")
const util = require("util")
const glob = util.promisify(require("glob"))

const {
  getCachedData,
  setCacheData,
  getOncePerHourCacheKey,
} = require("../_lib/cache")

/**
 * @typedef { Object.<string, Array<{ date: string, message: string }> } Updates
 * @returns Updates
 */
async function updates() {
  const { cachedData, cache } = getCachedData(
    "updates",
    getOncePerHourCacheKey(),
  )

  if (!cachedData) {
    console.log("Calculating updates.")

    /** @type Updates */
    const results = {}
    const files = await glob("src/**/*.md")
    for (const file of files) {
      const result = await git.spawn([
        "log",
        "--date=short",
        "--format='%cd@|@%s'", // simple date, weird signs, commit message
        file,
      ])
      const updates = result.stdout
        .split("\n") // commit per line
        .filter(Boolean) // but no empty lines
        .filter((line) => line.includes("Update:")) // only messages with keyword
        .map((line) => line.replace(/'(.*)'/, "$1")) // remove additional quotes
        .map((line) => {
          const [date, message] = line.split("@|@") // split by weird signs
          return {
            date,
            message: message.replace("Update: ", ""), // remove keyword
          }
        })
      if (Array.isArray(updates) && updates.length >= 1) {
        results[`./${file}`] = updates
      }
    }

    setCacheData(cache, getOncePerHourCacheKey(), results)
    return results
  }

  return cachedData
}

module.exports = updates
