var module = angular.module("myApp", []);
var myController = function($scope) {
	$scope.employees =[
{
	name : "Pqr",
	dob:new Date("March 10,1990"),
	gender:"Male",
	salary:345.9
},
{
	name : "Xyz",
	dob:new Date("December 10,1980"),
	gender:"Female",
	salary:125888
},
{
	name : "Vgt",
	dob:new Date("June 10,1990"),
	gender:"Male",
	salary:175.9
},
{
	name : "Tre",
	dob:new Date("December 10,1980"),
	gender:"Female",
	salary:125887.888
},
	         ];
};


module.controller("myControll", myController);
