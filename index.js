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

	function nextRow (tgt) {
		if (rowCount === sN) return (tgt = null)
		if (Array.isArray(tgt)) tgt.length = sN
		else tgt = Array(sN)

		for (var i = 0; i < sN; ++i){
			var idx = hSort[i] + vSort[rowCount]
			if (idx >= sN) idx -= sN
			tgt[i] = row[ idx ]
		}
		rowCount++

		return tgt
	}

	return nextRow
}
function sequence(n) {
	for (var i = 0, a=Array(n); i < n; ++i) a[i] = i
	return a
}
