var app = new Vue({
    el: '#app',
    data: {
      todoTasks: [
          {
              text: "Example Task",
              isDone: true
          },
          {
            text: "Create my first task!",
            isDone: false
        }
      ],
      newTask: "",
      error: ""
    },
    methods: {
        toggleTask(task){
            task.isDone = !task.isDone; 
        },
        addTask(){ 
            if(this.addTaskCheck()){
                this.todoTasks.unshift({ text: this.newTask, isDone: false});
                this.newTask = "";
            } 
        },
        addTaskCheck(){
            if(this.newTask.trim() == ""){ 
                this.error = 'Error, task must not be empty.';
                return false;
            }
            
            let alredyExists = false;
            this.todoTasks.forEach((task)=>{
                if (task.text.toLowerCase() == this.newTask.toLowerCase()) alredyExists = true;
            });

            if(alredyExists){
                this.error = 'Error, This task alredy exists.'
                return false;
            }
            this.error = '';
            return true;
        },
        deleteTask(task){
            this.todoTasks.splice(this.todoTasks.indexOf(task),1);
        } 
    }
  });