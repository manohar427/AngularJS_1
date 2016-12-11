var module = angular.module("myApp", []);
var myController = function($scope, $http) {

/*	$http.get("http://services.groupkt.com/country/get/all").then(
			function(response) {
				$scope.contries = response.data.RestResponse.result;
			});*/
$http({
	method:"get",
	url:"http://services.groupkt.com/country/get/all"
}).then(
		function(response) {
			alert('ok');
			$scope.contries = response.data.RestResponse.result;
		}		
);
	
};

module.controller("myControll", myController);
