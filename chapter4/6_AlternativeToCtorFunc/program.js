var quo = function(status) {
	return {
		get_status: function() {
			return status;
		}
	};
};
// Make an instance of quo.
var myQuo = quo("amazed");
console.log(myQuo.get_status());