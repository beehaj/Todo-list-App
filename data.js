import { display } from "./display.js";

//on launching the app, check storage for existing data, retrieve existing data and if theres none, create.


function TodoApp() {

    //create a todolist of an empty array for TodoApp.
    //push into local Storage
    //check if the array exists everytime the app loads, and if it does retrieve it using parse else create it

    // this.todoList = [] do i need to set the array before or below is enough?

    if (localStorage.getItem("thatList")) {
        // localStorage.getItem(JSON.parse("todoList"))
        this.thatList = JSON.parse(localStorage.getItem("thatList")) 
    }else{
        this.thatList = []
        localStorage.setItem("thatList", JSON.stringify(this.thatList))
    }
}


TodoApp.prototype.add = function (item) {   
        //to create an index for data (so that whenever we add to a todolist, we can add an index)
        // this cant be done in display, because the object data has no access to the array at the point of creation
        //recall that whatever is done to the parameter item here happens to whatever the add method is called on(refer to app.js)
        const index =  this.thatList.length //at this point we set the length of the array to the variable index.. at length 0
        item["index"] = index //we add a new property to item or whatever the add method is called on, and assign a value of const index above
        this.thatList.push(item)
        localStorage.setItem("thatList", JSON.stringify(this.thatList))
        display(item)
}

export {TodoApp};