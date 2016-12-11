var module = angular.module("myApp", []);
var myController = function($scope) {
	$scope.movies = [ {
		movieName : "Pqr",
		like : 3,
		dislike : 10
	}, {
		movieName : "Xyz",
		like : 310,
		dislike : 309
	}, {
		movieName : "Mnr",
		like : 43,
		dislike : 170
	}, {
		movieName : "Oyt",
		like : 73,
		dislike : 108
	} ];

	var incrementLike = function(movie) {
		++movie.like;
	};

	var incrementDisLike = function(movie) {
		++movie.dislike;
	};

	$scope.incrementLike = incrementLike;
	$scope.incrementDisLike = incrementDisLike;
};

module.controller("myControll", myController);
