function formatDate(
  dateTime,
  options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
) {
  let formatted = ''

  const date = new Date(dateTime)
  if (date.toString() === 'Invalid Date') {
    console.error(`Invalid date '${dateTime}' was passed into formatDate()`)
    return formatted
  }

  try {
    formatted = Intl.DateTimeFormat('en', options).format(date)
  } catch (err) {
    console.error(err)
  }
  return formatted
}

function formatDateNumeric(dateTime) {
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }
  return formatDate(dateTime, options)
}

module.exports = {
  formatDate,
  formatDateNumeric,
}
