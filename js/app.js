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
app.run(function($rootScope, $location) {
    $rootScope.$on("$locationChangeStart", function(event, next, current) {
        $rootScope.path = $location.path();
    });
});
