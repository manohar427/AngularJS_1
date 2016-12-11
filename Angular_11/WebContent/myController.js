var module = angular.module("myApp", []);
var myController = function($scope) {
	$scope.employees =[
{
	name : "Pqr",
	dob:new Date("March 10,1990"),
	gender:"Male",
	salary:6512.9
},
{
	name : "Xyz",
	dob:new Date("December 10,1980"),
	gender:"Female",
	salary:6766
},
{
	name : "Vgt",
	dob:new Date("January 10,1990"),
	gender:"Male",
	salary:8272727.9
},
{
	name : "Tre",
	dob:new Date("December 10,1980"),
	gender:"Female",
	salary:222.888
},
	         ];
};


module.controller("myControll", myController);
