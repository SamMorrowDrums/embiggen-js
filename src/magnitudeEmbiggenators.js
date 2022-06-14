export default {
	string: [
		(str) => str.toUpperCase(),
		(str) => str.split("").map(item => item.charCodeAt(0)).reduce((partialSum, a) => partialSum + a, 0)
	],
	number: [
		(num) => Math.pow(num, 2),
		(num) => String.fromCharCode(num % 65535) 
	],
	object: [
		(obj) => obj.toString()
	]
};