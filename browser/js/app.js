'use strict';

var app = angular.module('app', ['ui.router']);

app.run(function($rootScope) {
  $rootScope.$on("$stateChangeError", console.log.bind(console));
    //  $rootScope.$on ('$stateChangeSuccess', function(event, toState, toParams){
    //     stateLocationService.stateChange();
    // });
    // $rootScope.$on ('$locationChangeSuccess', function(){
    //     stateLocationService.locationChange();
    // });
});