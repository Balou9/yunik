function yunikFilter (cur, index, acc) {
  return acc.indexOf(cur) === index
}

function yunik (arr) {
  return arr.filter(yunikFilter)
}

module.exports = yunik
