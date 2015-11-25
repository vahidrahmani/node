(function () {
	var showDb = require('../utilities.js').showDb;
	var flights = require('../data/index');
	//var flight = require('../flight');
	/*for (var number in flights) {
		flights[number] = flight(flights[number]);
		console.log('fvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv');
	}*/

	function vahid(req, res) {
		var a = {
			1: 'q',
			2: 'w'
		};
		res.send(a);
		// var number = req.param('number');
		// console.log('>>>>>>>>>>>>>>>>>SSSSSSSSSSSSSSSSSS>>???', number);
		// if (typeof flights[number] === 'undefined') {
		// 	res.status(404).json({
		// 		status: 'error'
		// 	});
		// } else {
		// 	res.json(flights[number].getInformation());
		// }
		/*var query = "insert into salam (name) VALUES ('vahid rahmani')";

		showDb(query).then(function (res_1) {

		}).fail(function (err_2) {});*/
	}
	exports.vahid = vahid;
}());