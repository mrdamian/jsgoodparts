if (typeof Object.create !== 'function') {
	Object.create = function(o) {
		var F = function() {};
		// new object __proto__ will reference to f.Prototype
		F.prototype = o;
		return new F();
	};
}

function ShowAllMembers(o) {
	var name;

	for (name in o) {
		console.log(name + ': ' + o[name]);
	}
};


function ShowAllOwnProperties(o) {
	for (var name in o) {
		if (typeof o[name] !== 'function' && o.hasOwnProperty(name)) {
			console.log(name + ': ' + o[name]);
		}
	}
};


var stooge = {
	"first-name": "Jerome",
	"last-name": "Howard"
}

var another_stooge = Object.create(stooge);
another_stooge.Age = 66;

another_stooge.SimpleFunc = function() {};
console.log('Another_Stooge first-name: ' + another_stooge['first-name']);
console.log('Another_Stooge last-name: ' + another_stooge['last-name']);
console.log('Another_stooge has own property first-name: ' + another_stooge.hasOwnProperty('first-name'));
console.log('Another_stooge has own property Age: ' + another_stooge.hasOwnProperty('Age'));
console.log();
console.log('Show all members of another_stooge');
ShowAllMembers(another_stooge);
console.log();
console.log('Show all own properties of another_stooge');
ShowAllOwnProperties(another_stooge);
