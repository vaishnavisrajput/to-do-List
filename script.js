const addTask = document.getElementById('add-task')
const addButton = document.getElementById('add-button')
const taskList = document.getElementById('task-list')


function submit(event){
    if(addTask.value === ""){
        alert("You must write something!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = addTask.value;
        taskList.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    
    addTask.value = "";
    saveData();
}

addButton.addEventListener('click',submit)


taskList.addEventListener("click", function(event){
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("checked")
        saveData();
    }
    else if(event.target.tagName === "SPAN"){
        event.target.parentElement.remove();
        saveData();
    }
}, false)

addTask.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        event.preventDefault();
        submit();
    }
}, false)

function saveData(){
    localStorage.setItem("data", taskList.innerHTML);
}
function savedData(){
    taskList.innerHTML = localStorage.getItem("data");
}
savedData();





