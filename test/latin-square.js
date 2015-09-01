'use strict'
var test = require('tape')
var latinSquare = require('../latin-square')


var N = 8
var samples = []
for (var i=0; i<N; i++) samples[i] = i
var mat=[]
var pass=false

var sampler = latinSquare(samples)


test('latinSquare', function(t) {


	t.comment('add samples to an existing array')
	var arr=[]
	sampler = latinSquare(samples)
	sampler(arr)
	t.true(arr.length===N, 'provide samples of the right length')


	t.comment('gives unique row combinations')
	mat=[]
	pass = true
	sampler = latinSquare(samples)
	for (var i=0; i<N; i++) mat[i] = sampler()
	for (i=0; i<N; i++) for (var j=0; j<N; j++) {
		if (mat[i].indexOf(mat[i][j]) !== j) pass = false
	}
	t.true(pass, 'unique in rows')



	t.comment('gives unique col combinations')
	mat=Array(N)
	pass = true
	sampler = latinSquare(samples)
	for (var i=0; i<N; i++) {
		var smpl = sampler()
		for (var j=0; j<N; j++) {
			if (!Array.isArray(mat[j])) mat[j] = Array(N)
			mat[j][i] = smpl[j]
		}
	}

	for (i=0; i<N; i++) for (var k=0; k<N; k++) {
		if (mat[i].indexOf(mat[i][k]) !== k) console.log(mat[i])
		if (mat[i].indexOf(mat[i][k]) !== k) pass = false
	}
	t.true(pass, 'unique in cols')
	

	t.comment('returns null when samples are exhausted')
	sampler = latinSquare(samples)
	for (var i=0; i<N; i++) sampler()
	t.true(sampler()===null, 'returns null when square is finished')


	t.end()
})



