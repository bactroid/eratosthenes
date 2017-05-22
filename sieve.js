const {range} = require('lodash')

const setDifference = (a, b) => {
  const set = new Set(b)
  return a.filter(x => !set.has(x))
}

const findPrimes = num => {
  let numset = range(2, num + 1)
  for (let i = 0; i < numset.length; i++) {
    if (numset[i] >= Math.sqrt(num)) break
    let multiples = range(numset[i], num + 1, numset[i]).slice(1)
    numset = setDifference(numset, multiples)
  }
  return numset
}

module.exports = {
  setDifference,
  findPrimes
}
