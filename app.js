
import { TodoApp } from "./data.js";
import { display } from "./display.js";

function initialize(){
    
    const todo = new TodoApp();

    const writeBtn = document.querySelector(".write-button")
    const todoItems = document.querySelector(".todolist")
    const taskFormContainer = document.querySelector(".create-task")
    const taskForm = document.querySelector(".create-task-form")
    const closeBtn = document.querySelector(".close-icon")
    const todoHolder = document.querySelector(".task-list")

    todoHolder.addEventListener("click", function(e) {
      const index = e.target.dataset.index//every clicked item that has the dataset as index
      if (index) {
          todo.remove(e.target.parentNode)
          this.removeChild(e.target.parentNode)
      }
    })

    writeBtn.addEventListener("click", function(e) {
        todoItems.classList.toggle("card-inactive")
        taskFormContainer.classList.toggle("create-task-active")
        
    })

    closeBtn.addEventListener("click", function(e) {
        taskFormContainer.classList.toggle("create-task-active")
        todoItems.classList.toggle("card-inactive")
    })


    taskForm.addEventListener("submit", function(e) {
        e.preventDefault()
            todoItems.classList.toggle("card-inactive")
            taskFormContainer.classList.toggle("create-task-active")

        //create an object using details of the form making sure the name references the values passed in display()
       
            const date = `${this.month.value} / ${this.day.value} / ${this.year.value}`
            const detail = this.task.value
            const time = this.time.value
          
              const data = { date, detail,time } 
              todo.add(data) //calling the add method in the todo constuctor ) refer to data.js
                this.reset()

        // const data = {
        //    date: `${this.month.value} / ${this.day.value} / ${this.year.value}`,
        //    detail: this.task.value,
        //    time: this.time.value
        // }
        // const{ date, detail, time} = data;

        // todo.add(data)

    })
const refresh = function (show) {
    const todolist = JSON.parse(localStorage.getItem('thatList'))

    if (todolist.length > 0) {
        todolist.forEach(todo => {
            show(todo)
        });
    }
}
            refresh(display) 

}

initialize()