var app = angular.module('single-page-app', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'home.html',
			controller: 'homeController'
		})
		.when('/options', {
			templateUrl: 'options.html',
			controller: 'optionsController'
		})
		.when('/about', {
			templateUrl: 'about.html',
			controller: 'aboutController'
		})
		//.otherwise({ redirectTo: '/searchtable' });
		.otherwise({ templateUrl: 'err404.html' });
});

app.controller('homeController', function($scope) {
	$scope.message = 'Home';
});

app.controller('optionsController', function($scope) {
	$scope.message = 'Options';
});

app.controller('aboutController', function($scope) {
	$scope.message = 'About';
});