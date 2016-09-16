'use strict'
var c = require('cotest')
var latinSquare = require('./index')

var N = 8,
		samples = [],
		i, j

for (i = 0; i < N; ++i) samples[i] = i

var sampler = latinSquare(samples)

c('add samples to an existing array', function() {
	var arr = []
	sampler = latinSquare(samples)
	sampler(arr)
	c('===', arr.length, N)
})
c('unique row combinations', function() {
	var mat = [],
			pass = true
	sampler = latinSquare(samples)
	for (i = 0; i < N; ++i) { mat[i] = sampler() }
	for (i = 0; i < N; ++i) {
		for (j = 0; j < N; j+++j) {
			if (mat[i].indexOf(mat[i][j]) !== j) pass = false
		}
	}
	c('==', pass, true)
})
c('unique col combinations', function() {
	var mat = Array(N),
			pass = true
	sampler = latinSquare(samples)
	for (i = 0; i < N; ++i) {
		var smpl = sampler()
		for (j = 0; j < N; j+++j) {
			if (!Array.isArray(mat[j])) mat[j] = Array(N)
			mat[j][i] = smpl[j]
		}
	}
	for (i = 0; i < N; ++i) {
		for (var k = 0; k < N; k+++j) {
			if (mat[i].indexOf(mat[i][k]) !== k) pass = false
		}
	}
	c('==', pass, true)
})
c('returns null when samples are exhausted', function() {
	sampler = latinSquare(samples)
	for (i = 0; i < N; ++i) sampler()
	c('===', sampler(), null)
})
