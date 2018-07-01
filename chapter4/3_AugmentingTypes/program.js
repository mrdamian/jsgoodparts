Function.prototype.method = function(name, func) {
	this.prototype[name] = func;
	return this;
};

// Number is a number constructor, that is why it uses Function.prototype
Number.method('integer', function() {
	return Math[this < 0 ? 'ceil' : 'floor'](this);
});

console.log((-10 / 3).integer());

String.method('trim', function() {
	return this.replace(/^\s+|\s+$/g, '');
});
console.log('"' + " neat ".trim() + '"');