var shuffle = require('array-shuffle')

/**
 * Creates a random row generating function meeting the lating square restriction
 * usage:
 *		 sampler = latinCube(someRow)
 *		 newRow = sampler() | newRow = sampler(row)
 * @param	 {Array}		row samples to be randomized
 * @returns {Function} row generating function
 */
function latinSquare (row) {
	var sN = row.length
	var rowCount = 0

	// prepare array of row and col indices for pre-sorting
	var hSort = Array(sN)
	for (var i = 0; i < sN; ++i)hSort[i] = i
	var vSort = hSort.slice()

	shuffle(hSort)
	shuffle(vSort)	// random vertical shffle of rows

	function nextRow (tgt) {
		if (rowCount === sN) return (tgt = null)	// no more unique rows available
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

module.exports = latinSquare
