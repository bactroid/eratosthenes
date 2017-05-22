const {test} = require('tape')
const sieve = require('./sieve')

test('setDifference', assert => {
  const a = [1, 2, 3, 4]
  const b = [2, 3, 4, 5]
  const nullset = []
  const expected = [1]
  const actual = sieve.setDifference(a, b)
  assert.deepEqual(actual, expected, 'setDifference should return an array representing the set difference between two arrays')

  const nullDiff = sieve.setDifference(a, nullset)
  assert.deepEqual(a, nullDiff, 'setDifference of set A and null set should return set A')
  assert.end()
})

test('findPrimes', assert => {
  const expected = [2, 3, 5, 7]
  const actual = sieve.findPrimes(8)
  assert.deepEqual(actual, expected, 'findPrimes should return an array of primes between 1 and num inclusive')
  assert.end()
})
