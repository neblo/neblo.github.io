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
		$scope.message = 'Everyone come and see how good I look!';
		$scope.hometitle = 'Tasty Blugu Butter';
		$scope.bodytext = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin elit odio, scelerisque pharetra hendrerit eu, sagittis at urna. Mauris non tincidunt quam. Nam lacinia dapibus vehicula. Aenean nec nisl vel sapien laoreet lacinia sit amet quis tortor. Etiam aliquam lobortis elit. Nam in laoreet urna. Nunc at est rhoncus nulla porttitor sodales nec et ligula. Integer id condimentum magna. Etiam luctus massa sed ligula lacinia feugiat.\n' +
            '\n' +
            'Curabitur dignissim sapien eu rutrum ultrices. Sed ac condimentum enim, vitae gravida purus. In tristique, tortor in lobortis porta, elit metus lobortis velit, eget fringilla est metus eu orci. Integer sed urna tellus. Cras eu arcu libero. Maecenas facilisis, ex eget ultricies blandit, urna dui semper dui, rutrum feugiat magna nulla dictum libero. Vestibulum vestibulum nibh nisi, a consequat nisi iaculis vel. Donec nec magna ut magna posuere pretium. Nam aliquam ac enim a semper. Donec facilisis leo eget velit feugiat, sed tempus massa dapibus. Curabitur sit amet dignissim mi. Proin nec accumsan enim. Duis at ipsum ac risus fermentum tristique. Suspendisse potenti.\n' +
            '\n' +
            'Sed ornare lacus odio, a auctor urna volutpat quis. Phasellus dolor velit, bibendum at magna sed, cursus egestas lectus. Nulla facilisi. Nunc faucibus lacus vel nulla efficitur scelerisque. Curabitur consectetur blandit libero, eu ultricies leo vulputate eu. Aenean venenatis sit amet tortor quis dignissim. Donec lobortis porttitor placerat. Nam interdum porttitor tempus. Duis varius rhoncus magna, eu tempor lorem commodo vitae. Nullam ultricies sapien justo, vitae interdum justo varius sit amet. Nunc eleifend lacinia lorem commodo posuere. Maecenas ullamcorper nisi eget tempus tempus. Suspendisse mattis ligula elit, et lacinia ante porttitor nec. Curabitur tempus diam metus, vel rutrum arcu pulvinar vestibulum. Proin bibendum sem vitae leo pulvinar pellentesque.\n' +
            '\n' +
            'Nulla id scelerisque ex. Etiam egestas consectetur sem non luctus. Phasellus aliquet tellus ut commodo efficitur. Mauris eleifend orci eget eros porttitor, vitae tristique massa semper. Vivamus varius, massa ac mollis consequat, quam arcu viverra arcu, at lacinia lacus nisl id ligula. Fusce varius, magna quis venenatis dapibus, sem massa condimentum eros, non ultricies felis ante vitae quam. Nunc tristique dui vel nibh pulvinar volutpat. Duis suscipit lectus ac tellus ultrices hendrerit. Vivamus blandit lacus non velit scelerisque congue. Sed semper gravida magna eu pellentesque. Mauris diam eros, fringilla vitae pharetra non, congue tristique odio. Nunc imperdiet metus eget arcu euismod semper. Curabitur eu interdum velit, vitae sollicitudin mauris. In laoreet tempor nulla id condimentum. Curabitur ut mauris vitae sapien dictum porttitor eget sed sapien. Pellentesque porta arcu ac ligula egestas, ac bibendum mauris interdum.\n' +
            '\n' +
            'Cras eget sem vitae erat scelerisque rutrum a vel turpis. Vivamus quis faucibus lectus. Sed vulputate sollicitudin leo, vel lacinia est eleifend at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus porta porta ipsum et sodales. Quisque aliquet massa et odio posuere, convallis sagittis nunc consequat. Sed aliquam tortor ut libero elementum, nec bibendum tortor viverra. Donec lacinia lacus est, at egestas enim viverra vel. Suspendisse sed massa non metus sagittis facilisis eu nec ipsum. Donec consequat nunc et congue porta.';
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