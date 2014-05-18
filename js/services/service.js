/* This is what I originally had
 * As you can see, this is still a learning experience
 * just a gentle reminder 
 * to myself my programming skills have to be improved :p
 **/
/*
  app.service('ConfigService', function($http) {
    config = {};
    $http.get('js/conf.json').then(function(result) {
        config.jobs = result.data.jobs;
        config.email = result.data.email;
        config.github = result.data.github;
        config.linkedin = result.data.linkedin;
        config.projects = result.data.projects;
        config.resume = result.data.resume;

        angular.forEach(config.projects, function(project) {
            if (project.description)
                project.description = project.description.join(' ');
            if (project.languages)
                project.languages = project.languages.join('; ');
        });
    });
    this.config = config;
});
*/

app.service('ConfigService', function($http) {
    this.getConfig = function() {
        return $http.get('conf.json').then(function(result) {
            angular.forEach(result.data.projects, function(project) {
                if (project.description)
                    project.description = project.description.join(' ');
                if (project.languages)
                    project.languages = project.languages.join('; ');
            });
            return result.data;
        });
    };
});
