var module = angular.module("myApp", []);
var myController = function($scope) {
	$scope.employees =[
{
	name : "Pqr",
	dob:new Date("Janury 10,1990"),
	gender:"Male",
	salary:12345.9
},
{
	name : "Xyz",
	dob:new Date("December 10,1980"),
	gender:"Female",
	salary:125888
},
{
	name : "Vgt",
	dob:new Date("Janury 10,1990"),
	gender:"Male",
	salary:12345.9
},
{
	name : "Tre",
	dob:new Date("December 10,1980"),
	gender:"Female",
	salary:12588.888
},
	         ];
	$scope.limit = 2;
};


module.controller("myControll", myController);
