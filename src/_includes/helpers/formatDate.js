module.exports = function formatDate(dateTime) {
  const dateFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  return Intl.DateTimeFormat('en', dateFormatOptions).format(dateTime)
}
