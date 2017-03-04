'use strict';

var app = angular.module('app', ['ui.router']);

app.run(function($rootScope) {
    $rootScope.$on("$stateChangeError", console.log.bind(console));
});
