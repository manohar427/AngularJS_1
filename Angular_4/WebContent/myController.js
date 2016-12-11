var module = angular.module("myApp", []);
var myController = function($scope) {
	$scope.person = {
		name : "John",
		age : 24,
		dob : "JAN-17-1980",
		currency:"RS",
		flag :"download.jpg"
	};
};
module.controller("myControll", myController);
