
var flight = {
	airline: "Oceanic",
	airlineSub: "Oceanic1",
	number: 815,
	departure: {
		IATA: "SYD",
		time: "2004-09-22 14:55",
	},
	arrival: {
		IATA: "LAX",
		time: "2004-09-23 10:42",
		city: "Los Angeles"
	}
};
debugger;
var test = flight.departure && flight.departure.time;
var test2 = flight.airline && flight.airlineSub;
var test3 = flight.airline;
console.log('Object values');
console.log('test1 =' + test);
console.log('test2 =' + test2);
console.log('flight.airline: ' + flight.airline);

var test = 3;

