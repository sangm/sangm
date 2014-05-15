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


app.service('ConfigService', function($http) {
    config = {};
    $http.get('js/conf.json').then(function(result) {
        config.jobs = result.data.jobs;
        config.email = result.data.email;
        config.github = result.data.github;
        config.linkedin = result.data.linkedin;
        config.projects = result.data.projects;
        angular.forEach(config.projects, function(project) {
            if (project.description)
                project.description = project.description.join(' ');
            if (project.languages)
                project.languages = project.languages.join('; ');
        });
    });
    this.config = config;
});

app.controller('SideCtrl', function($scope, ConfigService) {
    $scope.config = ConfigService.config;
});
app.controller('MainCtrl', function($scope, ConfigService) {
    $scope.config = ConfigService.config;
});

app.controller('ProjectCtrl', function($scope, $routeParams, ConfigService) {
    $scope.project = NaN;
    $scope.validProject = false;
    angular.forEach(ConfigService.config.projects, function(project) {
        if ($routeParams.project === project.name) {
            $scope.project = project;
            $scope.validProject = true;
        }
    });
});
