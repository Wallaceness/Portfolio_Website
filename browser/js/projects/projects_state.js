'use strict';

console.log("project state");
app.config(function($stateProvider) {
    $stateProvider.state('projects', {
        url: 'projects',
        templateUrl: 'browser/js/projects/projects.html',
        controller: 'projects_ctrl'
    })
})
console.log("state out!")
