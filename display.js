//create a function that makes a list item
//i'm passing data which is an object that has date,time etc as properties


function display(data) {

    const li = document.createElement('li')
    li.setAttribute("class", "card task")

        const delIcon = document.createElement("div")
            delIcon.setAttribute("class", "delete-icon delete-task")
            delIcon.setAttribute("data-index", data.index) //so that we can use this as a check method to use index to delete
        
        const editIcon = document.createElement("div")
        editIcon.setAttribute("class", "edit-icon")

        const taskInfo = document.createElement("div")
        taskInfo.setAttribute("class", "task-info")

            const taskDate = document.createElement("h3")
            taskDate.setAttribute("class", "task-date")
                const dateText = document.createTextNode(data.date) //textnode creates text from a value, in this case from data
                taskDate.appendChild(dateText)

            const taskTime = document.createElement("h3")
            taskTime.setAttribute("class", "task-time")
                const timeText = document.createTextNode(data.time) //textnode creates text from a value, in this case from data
                taskTime.appendChild(timeText)
        taskInfo.appendChild(taskDate)
        taskInfo.appendChild(taskTime)
        
            const taskDetail = document.createElement("p")
            taskDetail.setAttribute("class", "task-detail")
                const taskDetailText = document.createTextNode(data.detail)
                taskDetail.appendChild(taskDetailText)

    li.appendChild(delIcon)
    li.appendChild(editIcon)
    li.appendChild(taskInfo)
    li.appendChild(taskDetail)

    const todoHolder = document.querySelector(".task-list")
    todoHolder.appendChild(li)


}

export { display }