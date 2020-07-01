const fs = require('fs')

module.exports = function inline(filePath) {
  const fileBuffer = fs.readFileSync(filePath)
  return fileBuffer.toString()
}
