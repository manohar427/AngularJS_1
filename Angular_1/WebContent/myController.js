var module = angular.module("myApp", []);
var myController1 = function($scope) {
	$scope.abc = "Hi to All from 1st controller";
};
module.controller("myControll1", myController1);


var myController2 = function($scope) {
	$scope.pqr = "Hi to All from 2nd controller";
};
module.controller("myControll2", myController2);
