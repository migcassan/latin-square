'use strict'
var c = require('cotest')
var latinSquare = require('./index')

var N = 8,
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
	c('==', uniqueInRow([[1,2],[2,1]]), true)
	c('==', uniqueInRow([[1,1],[2,1]]), false)
	c('==', uniqueInCol([[2,1],[1,2]]), true)
	c('==', uniqueInCol([[2,1],[2,2]]), false)

	sampler = latinSquare(samples)
	for (var i = 0; i < N; ++i) { mat[i] = sampler() }
	c('==', uniqueInRow(mat), true)
	c('==', uniqueInRow(mat), true)
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
//Convention[row][col]
function uniqueInRow(mat) {
	for (var row = 0; row < mat.length; ++row) {
		for (var col = 0; col < mat.length; ++col) {
			var val = mat[row][col]
			for (var i=row+1; i<mat.length; ++i) if (mat[i][col] === val) return false
		}
	}
	return true
}
function uniqueInCol(mat) {
	for (var row = 0; row < mat.length; ++row) {
		for (var col = 0; col < mat.length; ++col) {
			var val = mat[row][col]
			for (var j=col+1; j<mat.length; ++j) if (mat[row][j] === val) return false
		}
	}
	return true
}
