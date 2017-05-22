#!/usr/bin/env node

const sieve = require('../sieve')

if (process.argv.length !== 3) {
  console.error('Incorrect arguments')
  process.exit(0)
}

const displayValues = list => {
  const lastComma = /, $/
  const chopLastComma = str => str.replace(lastComma, '')
  const tenthElem = index => index % 10 === 0 && index !== 0
  const reducer = (acc, elem, index) => {
    if (tenthElem(index)) acc = acc + elem + '\n'
    else acc = acc + elem + ', '
    return acc
  }

  console.log(chopLastComma(list.reduce(reducer, '')))
}

const result = sieve.findPrimes(parseFloat(process.argv[2]))
displayValues(result)
console.log(result.length + ' primes found.')
