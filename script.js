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
		$scope.description = 'This is js loaded description in regular tags. it is super cool XD';
	});


	// create the controller and inject Angular's $scope //
	myApp.controller('mainController', function($scope, $location) {
		// create a message to display in our view
		$scope.message = 'Made from organic blugu milk collected daily!';
		$scope.hometitle = 'Tasty Blugu Butter';
		$scope.bodytext = 'Did you realize butter is harvested from tortured baby cows? Well now you can eat the finest butter that is both delicious and hippy approved! Introducing Blugu Butter, the organic alternative that is gluten free! Spread it on your toast or use it as fishing bait. While it is true many Blugus were killed in the making of this product, it is okay because they are now living in the life stream.\n';
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