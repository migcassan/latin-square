# latin-square

1. [Introduction](#introduction)
1. [Installation](#installation)
1. [Usage](#usage)
1. [Test](#test)
1. [License](#license)


## Introduction

Simple [latin square](https://en.wikipedia.org/wiki/Latin_square) generator from an initial row of elements. The function creates and returns a row generating function. On every call, the created row generating function returns the provided samples in a random order but meeting the latin-square restrictions:
* each items will only be in one row
* each item will only be in one column


## Installation

In node, from the root of your project folder type `npm install --save latin-square`.


## usage

The function takes the desired elements as parameter and returns a row-generating function
```
	latinSquare = require('latin-square')
	var sampler = latinSquare([0,1,2])
	sampler()  // example [1,0,2]
	sampler()  // example [2,1,0]
	sampler()  // example [0,2,1]
	sampler()  // null the combinations have been exhausted
```

For example, the following code would generate a random *9x9 Sudoku*:
```
	var latinSquare = require('latin-square')
	var elements = [0,1,2,3,4,5,6,7,8,9]
	var makeRow = LatinSquare(elements)

	var sudoku = elements.map(makeRow)
```


## Test

In node, from the root of your project folder type `npm test`.
(the test are not included in the npm package and must be cloned from the repository)



## License

Released under the [MIT License](http://www.opensource.org/licenses/MIT)

