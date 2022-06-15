import embiggen from './embiggen.js'; 

function embiggenerator (optionalEmbiggenatorFn, inPlace=null, embiggenLength=null, embiggenMagnitude=null, embiggenArrayProperty=null) {
	return embiggen(this, optionalEmbiggenatorFn, inPlace=null, embiggenLength=null, embiggenMagnitude=null, embiggenArrayProperty=null);
}

Array.prototype.embiggen = embiggenerator;
