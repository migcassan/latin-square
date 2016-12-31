var shuffle = require('array-shuffle')

module.exports = latinSquare

/**
 * Creates a random row generating function meeting the lating square restriction
 * usage:
 *		 sampler = latinCube(someRow)
 *		 newRow = sampler() | newRow = sampler(row)
 * @param	 {Array}		row samples to be randomized
 * @returns {Function} row generating function
 */
function latinSquare (row) {
	var sN = row.length,
			rowCount = 0

	// prepare array of row and col indices for pre-sorting
	var hSort = shuffle(sequence(sN)),
			vSort = shuffle(hSort)

	return function nextRow (countORtarget) {
		if (rowCount === sN) return countORtarget = null
		var target = Array.isArray(countORtarget) ? countORtarget
			: (countORtarget >= 0) ? Array(countORtarget)
			: Array(sN)
		if (target.length > sN) target.length = sN

		for (var i = 0; i < target.length; ++i) {
			var idx = hSort[i] + vSort[rowCount]
			if (idx >= sN) idx -= sN
			target[i] = row[idx]
		}
		rowCount++

		return target
	}
}
function sequence(n) {
	for (var i = 0, a=Array(n); i < n; ++i) a[i] = i
	return a
}
