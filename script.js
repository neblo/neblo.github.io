	// create the module and name it myApp
	var myApp = angular.module('myApp', ['ngRoute']);

	// configure our routes
	myApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			});
	});

	myApp.controller('metaController', function($scope) {
		// create a message to display in our view
		$scope.description = 'This is a super cool site that provides services and flowers.';
	});


	// create the controller and inject Angular's $scope //
	myApp.controller('mainController', function($scope, $location) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
		$scope.goGoogle = function() {
        	$location.url('http://google.com');
    	};
	});

	myApp.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	myApp.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});

	myApp.directive("titleDirective", function() {
		return {
			restrict : "A",
			template : "Title Goes Here"
		}
	});

	myApp.directive("urlDirective", function() {
		return {
			restrict : "C",
			template : "https://amazon.com"
		}
	});	