var module = angular.module("myApp", []);
var myController = function($scope) {
	$scope.fname = "John";
};
module.controller("myControll", myController);
