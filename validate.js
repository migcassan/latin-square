var NOT_AN_ARRAY = 'Not an array',
		EMPTY_ERROR = 'Invalid empty matrix',
		NOT_A_MATRIX = 'Not a valid 2D array',
		NOT_SQUARE = 'Not a valid 2D square array',
		COL_DUPLICATE = ' repeated in column ',
		ROW_DUPLICATE = ' repeated in row '

/**
 * Validates a 2d array as a latin square.
 *
 * @param {Array} matrix - 2d array with samples
 * @return {String} Empty string or an error message
 */
module.exports = function validate(matrix) {
	// Test subject type and size
	if (!Array.isArray(matrix)) return NOT_AN_ARRAY

	var size = matrix.length
	if (!size) return EMPTY_ERROR

	// Test internal rows and columns
	for (var ri = 0; ri < size; ++ri) {
		for (var ci = 0; ci < size; ++ci) {

			var row = matrix[ri]
			if (!Array.isArray(row)) return NOT_A_MATRIX
			if ( row.length !== size ) return NOT_SQUARE

			var val = matrix[ri][ci]
			for (var i=ri+1; i<size; ++i) if (matrix[i][ci] === val) return val + COL_DUPLICATE + ci

			val = matrix[ri][ci]
			for (var j=ci+1; j<size; ++j) if (matrix[ri][j] === val) return val + ROW_DUPLICATE + ri
		}
	}

	// Empty string used for Success
	return '';
}
