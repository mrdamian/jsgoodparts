var add = function(a, b) {
	if (typeof(a) !== 'number' || typeof(b) !== 'number') {
		throw {
			name: 'TypeError',
			message: 'arguments should be numbers'
		}
	}
	return a + b;
}

var try_it = function() {
	try {
		var test = add('seven');
	} catch (e) {
		console.log(e.name + ': ' + e.message);
	}
}

try_it();
