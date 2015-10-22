toDoList.controller('startController', ['$scope', function($scope) {
    $scope.todos = [
      
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