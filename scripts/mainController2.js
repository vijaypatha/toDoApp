angular.module("toDo").controller("mainController2", function($scope, dataService2) {
    $scope.test = "Yes!! Still working"

    $scope.myTaskArray = dataService.getTasks();
    // $scope.myTaskArray = dataService.getTodos();

    $scope.submitButton = function() {
        dataService.newTask($scope.addTask2,$scope.selectedImportance,$scope.selectedUrgency);

    };

    $scope.deleteButton = function(arguToService) {
        dataService.removeTask(arguToService);
    }

     $scope.importanceList = ["Important", "Not Important"];
     $scope.urgencyList = ["Urgent", "Not Urgent"];
});
