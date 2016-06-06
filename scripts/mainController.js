angular.module("toDo").controller("mainController", function($scope, dataService) {
    $scope.test = "Yes!! Still working"

    $scope.myTaskArray = dataService.getTasks();

    $scope.submitButton = function() {
        if(dataService.newTask($scope.addTask)) {
          $scope.addTask = "";
        }
    };

    $scope.deleteButton = function(arguToService) {
        dataService.removeTask(arguToService);
    }
});
