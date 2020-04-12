const fs = require('fs')
const path = require('path')

module.exports = function inline(filePath) {
  const fileBuffer = fs.readFileSync(path.join(process.cwd(), filePath))
  return fileBuffer.toString()
}
