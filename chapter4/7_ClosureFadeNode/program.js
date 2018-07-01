// Define a function that sets a DOM node's color
// to yellow and then fades it to white.
var fade = function(node) {
	var level = 1;
	var step = function() {
		var hex = level.toString(16);
		node.style.background = '#FFFF' + hex + hex;
		if (level < 15) {
			level += 1;
			setTimeout(step, 100);
		}
	};
	setTimeout(step, 100);
};
fade(document.body);