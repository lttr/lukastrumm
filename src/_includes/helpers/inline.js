const fs = require('fs')
const path = require('path')

module.exports = function inline(filePath) {
  const fileBuffer = fs.readFileSync(path.join(__dirname, filePath))
  return fileBuffer.toString()
}
