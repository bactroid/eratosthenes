# eratosthenes

An implementation of the [sieve of Eratosthenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes) to find prime numbers.

Why? No, friend…_Why not?!_

It calculates the primes between 2 and 1M in about 8 seconds on my hardware. I feel pretty good about that.

## Usage

If installed globally, this module can be called from the command line like this:

`sieve [n]`

where `n` is an integer. `sieve` will calculate all the primes from 2 to `n` and will print out a list and the number of primes it found.

## Functions

If installed as a module in another project, this utility provides the following functions.

### `setDifference(a, b)`

Takes two arrays (`a` and `b`) and returns an array of the set difference _(A\B)_.

### `findPrimes(num)`

Returns an array of all the prime numbers between 2 and `num`.

## Requirements

This module uses `lodash.range` because Python has spoiled me.
