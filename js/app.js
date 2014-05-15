var app = angular.module('app', [
        'ngAnimate',
        'ngRoute',
]);
app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/mainList.html',
        })
        .when('/projects/:project', {
            templateUrl: 'views/project.html',
            controller: 'ProjectCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});

