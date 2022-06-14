import embiggen from './embiggen.js'; 

function embiggenerator (optionalEmbiggenatorFn) {
	return embiggen(this, optionalEmbiggenatorFn);
}

Array.prototype.embiggen = embiggenerator;
