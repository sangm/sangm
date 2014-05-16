app.controller('SideCtrl', function($scope, ConfigService) {
    $scope.config = ConfigService.config;
});
app.controller('MainCtrl', function($scope, $location, ConfigService) {
    $scope.config = ConfigService.config;
    console.log($location.path());
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
