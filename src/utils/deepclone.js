/**
 * Object deepclone
 * @param {Object} obj the object need clone
 */
module.exports = function deepclone (obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }

  const newObj = {}

  Object.keys(obj).forEach(v => {
    if (typeof obj[v] === 'object' && obj[v] !== null) {
      newObj[v] = deepclone(obj[v])
    } else {
      newObj[v] = obj[v]
    }
  })

  return newObj
}
