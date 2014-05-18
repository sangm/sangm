app.controller('SideCtrl', function($scope, ConfigService) {
    ConfigService.getConfig().then(function(result) {
        $scope.config = result;
    console.log($scope.config);
    });

});
app.controller('MainCtrl', function($scope, $location, ConfigService) {
    ConfigService.getConfig().then(function(result) {
        $scope.config = result;
    });
});
app.controller('ProjectCtrl', function($scope, $routeParams, ConfigService) {
    $scope.project = NaN;
    $scope.validProject = false;
    ConfigService.getConfig().then(function(result) {
        angular.forEach(result.projects, function(project) {
            if ($routeParams.project === project.name) {
                $scope.project = project;
                $scope.validProject = true;
            }
        });
    });

});
