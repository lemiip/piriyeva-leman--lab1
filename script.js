let count=4;
const taskInput=document.getElementById("task-name");
const addButton=document.getElementById("add-btn");
const tasksContainer=document.getElementById("tasks-container");
 function addTask(){
    const taskText=taskInput.value.trim();
    if(taskText===""){
        alert("Пожалуйста,введите название задачи!");
        return;
    }
    const newTask = document.createElement("p");
newTask.classList.add("task-item");
newTask.textContent =count + "." + taskText;
tasksContainer.appendChild(newTask);
count++;
taskInput.value="";
console.log(`Добавлена новая задача: ${taskText}`)
 }
 addButton.addEventListener("click",addTask);
 