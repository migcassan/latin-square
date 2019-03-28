'use strict'
var c = require('cotest')
var latinSquare = require('./index')
var validate = require('./validate')

console.log(" esta es mi RAMA DEVELOPE")

console.log("Continuo trabajando en mi Rama develop. Luego voy a crear otra rama y bajar los cambios de develope a esta rama.")
var N = 37,
		samples = sequence(N)

var sampler = latinSquare(samples)

c('get a new row', function() {
	sampler = latinSquare(samples)
	c('===', sampler().length, N)
	c('===', sampler(3).length, 3)
})
c('add samples to an existing array', function() {
	var len = 3,
			arr = Array(len)
	sampler = latinSquare(samples)
	c('===', sampler(arr).length, len)
	c('===', arr.length, len)
})
c('unique row and col combinations', function() {
	var mat = []

	//avoid false positives
	c('===', validate([[1,2],[2,1]]), '')
	c('!==', validate([[1,1],[2,1]]), '')
	c('===', validate([[2,1],[1,2]]), '')
	c('!==', validate([[2,1],[2,2]]), '')

	sampler = latinSquare(samples)
	for (var i = 0; i < N; ++i) { mat[i] = sampler() }
	c('===', validate(mat), '')
	c('===', validate(mat), '')
})
c('ends when samples are exhausted', function() {
	sampler = latinSquare(samples)
	for (var i = 0; i < N; ++i) sampler()
	c('===', sampler(), null)
})
function sequence(n) {
	for (var i=0, a=[]; i<n; ++i) a[i] = i+1
	return a
}

c('Validating non-array', function() {
	c('===', validate('Latin square'), 'Not an array');
})

c('Validating non-2D array', function() {
	c('===', validate( ['Latin square'] ), 'Not a valid 2D array');
})

c('Validating empty array', function() {
	c('===', validate( [] ), 'Invalid empty matrix');
})

c('Validating valid square', function() {
	c('===', validate([ [0, 1, 2, 3],
											[2, 0, 3, 1],
											[3, 2, 1, 0],
											[1, 3, 0, 2] ]), '');
})

c('Validating non-square subject', function() {
	c('===', validate([ [0, 1, 2, 3],
											[2, 0, 3, 1],
											[3, 2, 1, 0] ]), 'Not a valid 2D square array');
	c('===', validate([ [0, 1, 2, 3],
											[2, 0, 3, 1, 2],
											[3, 2, 1, 0],
											[1, 3, 0, 2] ]), 'Not a valid 2D square array');
})

c('Validating duplicate in column', function() {
	c('===', validate([ [0, 4, 2, 3],
											[2, 0, 3, 1],
											[3, 2, 1, 0],
											[1, 4, 0, 2] ]), '4 repeated in column 1');
})

c('Validating duplicate in row', function() {
	c('===', validate([ [0, 1, 2, 3],
											[2, 0, 3, 1],
											[4, 2, 1, 4],
											[1, 3, 0, 2] ]), '4 repeated in row 2');
})
