(function () {
	'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {

	$scope.sayHello = function () {
		return "Hello Coursera!";
	};
	$scope.name = "Francisco López Alegría";
	$scope.taller = "En la luna ...";
});

})();
