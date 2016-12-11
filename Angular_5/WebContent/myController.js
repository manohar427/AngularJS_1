var module = angular.module("myApp", []);
var myController = function($scope) {
	$scope.persons =[
{
	fname : "John",
	lastname:"Meg",
	email : "jphn@gmail.com",
	dob : "JAN-17-1980",
	country:"IN"
},
{
	fname : "Pqr",
	lastname:"xyz",
	email : "Pqr@gmail.com",
	dob : "JAN-15-1980",
	country:"US"
},
{
	fname : "Mnr",
	lastname:"Sed",
	email : "Mnr@gmail.com",
	dob : "JAN-27-1980",
	country:"UK"
}
	                ];
	
};
module.controller("myControll", myController);
