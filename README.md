# Embiggen JS

>  "A noble spirit embiggens the smallest array."

A Javascript library that implements `Array.embiggen`, enabling you to embiggen an array of any type(s), using a variety of embiggenators.

## Usage

### Node

```javascript
import 'embiggen';
```

### Browser

Navigate to the source folder (or clone the repo) and run

```
npm run build
```

Then the JS file is available in `dist/main.js`;

### Example

```javascript
let data = ["data", 12, {test: "true"}, [1, "why?"], 99];
const possiblyEmbiggened = data.embiggen();
if (possiblyEmbiggened !== null) {
	// Then you received a new, muchly embiggened array
} else {
	// Your array was embiggened in place
	if (data.embiggened) {
		// Your array received a property embiggenation
	} else {
		// The data in your array will have been embiggened thusly:
		// - perhaps it was embiggened lengthwise
		// - plausibly it was embiggened in magnitude
		// - :shrug: possible both?
		// - if you passed an optionalEmbiggenatorFn, maybe it also was used on the array??
	}
}

```

## Example outputs

```javascript
["123", {}, "lol", 123, "B==>"].embiggen()
> [150, '[object Object]', 327, '{', 250]
["123", {}, "lol", 123, "B==>"].embiggen()
> [150, 150, Infinity, '[object Object]', 'loOoOoOoOoOoOl', 'LOL', '{', 15129, 'B========> - - - - -', 'B==>']
["123", {}, "lol", 123, "B==>"].embiggen()
> ['123', '[object Object]', 'loOoOoOoOoOoOl', '{', 250]
["123", {}, "lol", 123, "B==>"].embiggen()
> ['123', '123', {…}, {…}, 'lol', 'lol', 123, 123, 'B==>', 'B==>']
["123", {}, "lol", 123, "B==>"].embiggen()
null // embiggened in-place
```

## optionalEmbiggenatorFn

`Array.embiggen` takes an `optionalEmbiggenatorFn`, which potentially receives the entire (possibly already embiggenated) array as an argument, and can then attempt to embiggen it - and if it errors out for any reason, this exception will be caught and duly ignored.

## Advanced Usage

Assuming your life is just too stressful to cope with the unkown, and you wish to control the embiggenation, I suppose you could force the embiggenation types that you desire.

`Array.embiggen(optionalEmbiggenatorFn, inPlace=null, embiggenLength=null, embiggenMagnitude=null, embiggenArrayProperty=null)`

Also it is possible to alter the globally exported embiggenator functions:

_In a browser context replace `global` with `window`_

```
global._lengthEmbiggenators = lengthEmbiggenators;
global._magnitudeEmbiggenators = magnitudeEmbiggenators;
```

### Length Embiggenators

As per the name, length embiggenators will impact the length of an array in a way that conceivably embiggens it. These take the entire array as input, and are expected to alter the array in place and return it (extending it is obviously fine).

```javascript
global._lengthEmbiggenators [...fn]

```

## Magnitude Embiggenators

These are exported as an object, by data type, and act on a single piece of data in the array.

```javascript
global._magnitudeEmbiggenators = {
	"string": [...fn],
	"number": [...fn],
	"object": [...fn],
}
```

These functions should be able to handle all input of their type. Nested Arrays are simply embiggened recursively.

**Happy embiggening!**

