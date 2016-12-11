var module = angular.module("myApp", []);
var myController = function($scope) {
	$scope.contries =[
{
	countryName : "IN",
	states:[{stateName:"In-1"},{stateName:"In-2"},{stateName:"In-3"}]
},
{
	countryName : "UK",
	states:[{stateName:"Uk-1"},{stateName:"Uk-2"},{stateName:"Uk-3"}]
},
{
	countryName : "US",
	states:[{stateName:"Us-1"},{stateName:"Us-2"},{stateName:"Us-3"}]
}
	         ];
	
};
module.controller("myControll", myController);
