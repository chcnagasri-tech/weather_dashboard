let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks(){
localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks(filter = "all"){

const taskList = document.getElementById("taskList");

taskList.innerHTML = "";

let filteredTasks = tasks.filter(task => {

if(filter === "active") return !task.completed;

if(filter === "completed") return task.completed;

return true;

});

filteredTasks.forEach((task, index) => {

const li = document.createElement("li");

if(task.completed){
li.classList.add("completed");
}

li.innerHTML = `
<span onclick="toggleTask(${index})">
${task.text}
</span>

<div>
<button onclick="toggleTask(${index})">✔</button>

<button onclick="deleteTask(${index})">❌</button>
</div>
`;

taskList.appendChild(li);

});

}

function addTask(){

const taskInput = document.getElementById("taskInput");

const text = taskInput.value.trim();

if(text === "") return;

tasks.push({
text:text,
completed:false
});

saveTasks();

renderTasks();

taskInput.value = "";

}

function toggleTask(index){

tasks[index].completed = !tasks[index].completed;

saveTasks();

renderTasks();

}

function deleteTask(index){

tasks.splice(index,1);

saveTasks();

renderTasks();

}

function filterTasks(filter){

renderTasks(filter);

}

renderTasks();