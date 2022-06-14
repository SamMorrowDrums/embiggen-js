function copyToArray (original, updated) {
	updated.forEach((item, i) => {
		original[i] = item;
	});
}

function doubler (array) {
	const out = [];
	for (let i = 0; i < array.length; i++) {
		out.push(array[i], array[i]);
	}
	return copyToArray(array, out);
}

export default [
	doubler
];