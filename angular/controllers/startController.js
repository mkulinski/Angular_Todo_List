ourApp.controller('startController', ['$scope', function($scope) {
    //js code
    $scope.todos = [
      {done: false, text: 'first'},
      {done: false, text: 'second'}
    ];

    $scope.addTodo = function() {
      var newTodo = {
        done: false,
        text: $scope.todoText
      };
      $scope.todos.push(newTodo);
      $scope.todoText='';
    };

    $scope.removeTodo = function(start) {
      $scope.todos.splice(start, 1);
    };
}]);