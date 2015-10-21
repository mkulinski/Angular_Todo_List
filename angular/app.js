var ourApp = angular.module('appName', ['ngRoute']);
  
ourApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'angular/templates/start.html',
        controller: 'startController'
      })
      .when('/aboutMe', {
        templateUrl: 'angular/templates/about-me.html',
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);