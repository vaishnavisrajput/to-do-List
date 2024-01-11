const addTask = document.getElementById('add-task')
const addButton = document.getElementById('add-button')
const taskList = document.getElementById('task-list')

addButton.addEventListener('click', function(event){
    if(addTask.value === ""){
        alert("You must write something!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = addTask.value;
        taskList.appendChild(li)
    }
})
