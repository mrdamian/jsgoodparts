
function add(a, b) {
	return a + b;
}


var myObject = {
	value: 0,
	// 1. method invociation pattern
	increment: function(inc)
	{
		this.value += typeof(inc) === 'number' ? inc : 1;
	},

}
myObject.increment();

console.log('myObjectValue = ' + myObject.value);
myObject.increment(5);
console.log('myObjectValue = ' + myObject.value);

// 2. function invociation pattern
myObject.double = function() {
	var that = this;
	var helper = function() {
		that.value = add(that.value, that.value);
	};
	helper();
}



myObject.double();
console.log('myObjectValue = ' + myObject.value);

var person = Object.create(null);
// 3. Constructor invocation pattern
// Create a constructor function called Quo.
// It makes an object with a status property.
// This is actually the object that will be created and assigned to myQuo.
var Quo = function (string) {
this.status = string;
};
// Give all instances of Quo a public method
// called get_status.
Quo.prototype.get_status = function ( ) {
return this.status;
};
// Make an instance of Quo. 
// myQuo linked to the Quo.prototype
var myQuo = new Quo("confused");
console.log('myQuo status = ' + myQuo.get_status()); // confused


// 4. Apply invociation pattern

var array = [3, 4];
var sum = add.apply(null, array); // sum is 7
// Make an object with a status member.
var statusObject = {
status: 'A-OK'
};
// statusObject does not inherit from Quo.prototype,
// but we can invoke the get_status method on
// statusObject even though statusObject does not have
// a get_status method.
var status = Quo.prototype.get_status.apply(statusObject);
console.log('status after apply = ' + status);
