(function () {
	//'use strict';
	define(['app'], function (app) {
		app.controller('vahidCtrl', vahidCtrl);
		vahidCtrl.$inject = ['$http', 'mainViewFactory', '$routeParams'];

		function vahidCtrl($http) {
			var vm = this;
			vm.test_page_vahid = 'THIS IS MY FIRST EXAMPLE';
			var url = "http://127.0.0.1/app/vahid/123";

			$http.post(url)
				.success(function (res) {
					console.log(res);
					vm.test = res;
				}).error(function (err) {
					console.log('error is', err);
				});
			console.log("test...............");
		}
	});
}());