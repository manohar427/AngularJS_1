var module = angular.module("myApp", []);
var myController = function($scope, $http) {
	$scope.employees = "";

	//$http.get("http://services.groupkt.com/country/get/all").then(
	$http({
		method : "GET",
		url : "http://services.groupkt.com/country/get/all"
	}).then(function(response) {
		$scope.employees = response.data.RestResponse.result;
	});
};

module.controller("myControll", myController);
