import lengthEmbiggenators from "./lengthEmbiggenators.js";
import magnitudeEmbiggenators from "./magnitudeEmbiggenators.js";

global._lengthEmbiggenators = lengthEmbiggenators;
global._magnitudeEmbiggenators = magnitudeEmbiggenators;

export default function (array, optionalEmbiggenatorFn) {
	const embiggenArrayProperty = Math.random() >= 0.99;
	const embiggenInPlace = Math.random() >= 0.8;
	const embiggenLength = Math.random() <= 0.5;
	const embiggenMagnitude = embiggenLength ? Math.random() <= 0.3 : true;
	const outArray = embiggenInPlace ? array : array.slice();

	if (embiggenArrayProperty) {
		outArray.embiggened = true;
	} else {
		// we're gonna need an embiggenator
		if (embiggenLength) {
			global._lengthEmbiggenators[Math.floor(Math.random() * global._lengthEmbiggenators.length)](outArray);
		}

		if (embiggenMagnitude) {
			outArray.forEach((item, i) => {
				const type = typeof item;
				if (type === "array") {
					outArray[i].embiggen(optionalEmbiggenatorFn);
				} else {
					outArray[i] = global._magnitudeEmbiggenators[type][Math.floor(Math.random() * global._magnitudeEmbiggenators[type].length)](item);
				}
			});	
		}

		if (optionalEmbiggenatorFn) {
			try {
				optionalEmbiggenatorFn(outArray);
			} catch {
				// shrug
			}
		}
	}

	if (embiggenInPlace) {
		return null;
	}
	return outArray;
}