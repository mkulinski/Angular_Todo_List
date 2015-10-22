var toDoList = angular.module('toDoList', ['ngRoute']);
  
toDoList.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'angular/templates/start.html',
        controller: 'startController'
      })
      .when('/about', {
        templateUrl: 'angular/templates/about.html',
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);