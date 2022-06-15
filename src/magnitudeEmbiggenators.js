const ooSir = new RegExp('B=+>');
const lool = new RegExp('[Ll]o+[Ll]');

export default {
	string: [
		(str) => str.toUpperCase(),
		(str) => str.split("").map(item => item.charCodeAt(0)).reduce((partialSum, a) => partialSum + a, 0),
		(str) => {
			if (str.match(ooSir)) {
				return `B${new Array(str.length * 2).fill("=").join('')}> - - - - -`
			} else if (str.match(lool)) {
				return `l${new Array(str.length * 2).fill("oO").join('')}l`
			}
			return str
		}
	],
	number: [
		(num) => Math.pow(num, 2),
		(num) => String.fromCharCode(num % 65535) 
	],
	object: [
		(obj) => obj.toString(),
		(obj) => Infinity
	]
};
