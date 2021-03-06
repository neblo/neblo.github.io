var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
    // HOME STATES AND NESTED VIEWS ========================================
        .state('app', {
            abstract: true,
            resolve: {
                jwt: function() {
                    return true;
                }
            },
            templateUrl: '/base-template.html'
        })
        .state('home', {
            parent: 'app',
            url: '/',
            templateUrl: '/partial-home.html',
            controller: function($scope, $http, PageService) {
                // AJAX //
                var url = "https://neblo.github.io/metadata.json";
                $http.get(url).then( function(response) {
                    // debug code //
                    console.log(response.data.title);
                    console.log(response.data.description);
                    ////////////////
                    PageService.setPageTitle(response.data.title);
                    PageService.setMetaDescription(response.data.description);
                });
            }
        })

        // nested list with custom controller
        .state('home.list', {
            url: 'list',
            templateUrl: '/partial-home-list.html',
            controller: function($scope, PageService) {
                $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
                PageService.setMetaDescription('List: It\'s blue, it\'s tasty, it\'s made from fresh daily squeezed blugus. It\'s Blugu Butter! V2.0');
                PageService.setPageTitle('List Page');
            }
        })

        // nested list with just some random string data
        .state('home.paragraph', {
            url: 'paragraph',
            template: 'I could sure use a drink right now.',
            controller: function($scope, PageService) {
                PageService.setMetaDescription('Para: It\'s blue, it\'s tasty, it\'s made from fresh daily squeezed blugus. It\'s Blugu Butter! V2.0');
                PageService.setPageTitle("Paragraph Page");
            }
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            parent: 'app',
            url: '/about',
            views: {
                '': { templateUrl: '/partial-about.html' },
                'columnOne@about': { template: 'Look I am a column!' },
                'columnTwo@about': {
                    templateUrl: '/table-data.html',
                    controller: 'scotchController'
                }
            }
        });

    $locationProvider.html5Mode(true);

});

routerApp.controller('metaDescriptionController', function($scope, PageService) {
    //var app = this;
    $scope.metaDescription = 'Default Description Should Be Replaced';
    $scope.pageTitle = 'Default Title Should Be Replaced';

    activate();

    function activate() {
        metaDescriptionWatch();
        pageTitleWatch();
    }

    function metaDescriptionWatch() {
        $scope.$watch(function () {
            return PageService.getMetaDescription();
        }, function (newMetaDescription) {
            $scope.metaDescription = newMetaDescription;
        });
    }

    function pageTitleWatch() {
        $scope.$watch(function () {
            return PageService.getPageTitle();
        }, function (newPageTitle) {
            $scope.pageTitle = newPageTitle;
        });
    }
});

routerApp.controller('scotchController', function($scope, PageService) {

    PageService.setMetaDescription('Abut: It\'s blue, it\'s tasty, it\'s made from fresh daily squeezed blugus. It\'s Blugu Butter! V1.4');
    PageService.setPageTitle('Abut Page');

    $scope.message = 'test';
    $scope.scotches = [
        {
            name: 'Macallan 12',
            price: 50
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name: 'Glenfiddich 1937',
            price: 20000
        }
    ];

});

routerApp.service('PageService', function() {
    var metaDescription = null;
    var pageTitle = null;

    return {
        getMetaDescription: getMetaDescription,
        setMetaDescription: setMetaDescription,
        getPageTitle: getPageTitle,
        setPageTitle: setPageTitle
    };

    function getMetaDescription() {
        return metaDescription;
    }

    function setMetaDescription (description) {
        metaDescription = description;
    }

    function getPageTitle() {
        return pageTitle;
    }

    function setPageTitle (title) {
        pageTitle = title;
    }
});
