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
