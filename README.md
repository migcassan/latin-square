# latin-square

• [Introduction](#introduction) • [Installation](#installation) • [Usage](#usage) • [Test](#test) • [License](#license)


## Introduction

Simple [latin square](https://en.wikipedia.org/wiki/Latin_square) generator from an initial row of elements. The function creates and returns a row generating function. On every call, the created row generating function returns the provided samples in a random order but meeting the latin-square restrictions:

* each items will only be in one row
* each item will only be in one column

## Installation

In node, from the root of the project folder type `npm install --save latin-square`.

## usage

The function takes the desired elements as parameter and returns a row-generating function

```javascript
	latinSquare = require('latin-square')
	var sampler = latinSquare([0,1,2])
	var row1 = sampler.next().value	// example [1,0,2]
	var row2 = sampler.next().value	// example [2,1,0]
	var row3 = sampler.next().value	// example [0,2,1]
	var done = sampler.next().done	// true
```

For example, the following code would generate a random *9x9 Sudoku*:
```
	var latinSquare = require('latin-square')
	var elements = [0,1,2,3,4,5,6,7,8,9]
	var makeRow = LatinSquare(elements)

	var sudoku = elements.map(makeRow)
```


## Test

In node, from the root of the project folder type `npm test`.
(the test are not included in the npm package and must be cloned from the repository)



## License

Released under the [MIT License](http://www.opensource.org/licenses/MIT)

