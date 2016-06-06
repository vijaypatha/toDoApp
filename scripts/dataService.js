angular.module("toDo").service("dataService", function() {

    //Get data from task Array
    this.getTasks = function() {
        return taskArray;
    }

    //add newTasks to "taskArray"
    this.newTask = function(addingTask) {
        if (addingTask) {
            taskArray.unshift(addingTask);

        } else {
          alert("Please enter a task");
        }
    };

//Delete tasks from "taskArray"
this.removeTask = function(deleteTask){
  for(var i = 0; i < taskArray.length; i++) {
    if(deleteTask === taskArray[i]) {
      taskArray.splice(i--,1);
    }
  }
};

    //Orignal Array. (empty)
    var taskArray = [];

}); //main
