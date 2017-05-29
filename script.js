	// create the module and name it myApp
	var myApp = angular.module('myApp', ['ngRoute']);

	// configure our routes
	myApp.config(function($routeProvider, $locationProvider) {
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

        	$locationProvider.html5Mode(true);
	});

	myApp.controller('MetaController', function($log, $rootScope, $scope, PageService) {
        var app = this;

		activate();

        function activate() {
            metaDescriptionWatch();
        }

		// create a message to display in our view
		app.metaDescription = 'XXX - This is the default description that should never be displayed - XXX';

        function metaDescriptionWatch() {
            $scope.$watch(function () {
                return PageService.getMetaDescription();
            }, function (newMetaDescription) {
                app.metaDescription = newMetaDescription;
            });
        }
	});

    myApp.controller('aboutController', function($scope, PageService) {
        $scope.message = 'Look! I am an about page.';
        PageService.setMetaDescription('This is the description for the about page V1.2');
    });

    myApp.controller('contactController', function($scope, PageService) {
        $scope.message = 'Contact us! JK. This is just a demo.';
        PageService.setMetaDescription('This is the description for the contact us page V1.2');
    });

	myApp.controller('mainController', function($scope, $location, PageService) {
		// create a message to display in our view
		$scope.message = 'Made from organic blugu milk collected daily!';
		$scope.hometitle = 'Delish Blugu Butter';
		$scope.bodytext = 'Did you realize butter is harvested from tortured baby cows? Well now you can eat the finest butter that is both delicious and hippy approved! Introducing Blugu Butter, the organic alternative that is gluten free! Spread it on your toast or use it as fishing bait. While it is true many Blugus were killed in the making of this product, it is okay because they are now living in the life stream.\n';
        $scope.rating = 'Barret Wallace: "Blugu Butter is great! I smother my Chocoburger with it! - 5/5 stars"';
        PageService.setMetaDescription('It\'s blue, it\'s tasty, it\'s made from fresh daily squeezed blugus. It\'s Blugu Butter! V1.2');
	});

    myApp.service('PageService', function() {
        var metaDescription = null;
        return {
            getMetaDescription: getMetaDescription,
            setMetaDescription: setMetaDescription
        };

        function getMetaDescription() {
            return metaDescription;
        }

        function setMetaDescription (description) {
			metaDescription = description;
        }
    });

	// Directives
	myApp.directive("titleDirective", function() {
		return {
			restrict : "A",
			template : "Delicious Blugu Butter"
		}
	});

	myApp.directive("urlDirective", function() {
		return {
			restrict : "C",
			template : "https://amazon.com"
		}
	});
