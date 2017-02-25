'use strict'
var c = require('cotest')
var latinSquare = require('./index')
var validate = require('./validate')

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
