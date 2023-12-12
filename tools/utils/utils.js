function getParam(param = '') {
  const paramIndex = process.argv.findIndex(value => value === param)

  return paramIndex > -1 ? process.argv[paramIndex + 1] : ''
}

module.exports = { getParam }
