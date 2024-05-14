// Load tasks from local storage when the page loads
document.addEventListener("DOMContentLoaded", function() {
    var savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
        savedTasks.forEach(function(taskText) {
            addTask(taskText);
        });
    }
    var savedcolor = JSON.parse(localStorage.getItem("currentColor"));
    if (savedcolor === "white") {
        box.style.backgroundColor = "black";
        text.style.color="white";
        mode.style.backgroundColor="white";
        addTaskBtn.style.backgroundColor="white";
    } else {
        box.style.backgroundColor = "white";
        text.style.color="black";
        mode.style.backgroundColor="black";
        addTaskBtn.style.backgroundColor="black";
    }
});

document.getElementById("addTaskBtn").addEventListener("click", function() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();
    if (taskText !== "") {
        addTask(taskText);
        saveTasks();
        taskInput.value = "";
    }
});

function addTask(taskText) {
    var taskList = document.getElementById("taskList");
    var taskItem = document.createElement("div");
    taskItem.className = "taskItem";
    taskItem.innerHTML = taskText +' <button class="done" onclick="completeTask(this)">✓</button>'+ ' <button class="deleteBtn" onclick="deleteTask(this)">🗑️</button>';
    taskList.appendChild(taskItem);
}

function deleteTask(element) {
    element.parentNode.remove();
    saveTasks();
}
var completeTask=(element)=>{
    element.innerHTML="✓";
    element.style.backgroundColor="green";
    saveTasks();
}
function saveTasks() {
    var tasks = [];
    var taskItems = document.querySelectorAll(".taskItem");
    taskItems.forEach(function(taskItem) {
        tasks.push(taskItem.textContent.replace( "✓ 🗑️"," ",).trim());
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
var box= document.getElementById("box");
var mode= document.getElementById("mode");
var text=document.getElementById("text");
var addTaskBtn=document.getElementById("addTaskBtn")
mode.addEventListener("click", function() {
    var currentColor = box.style.backgroundColor;
    if (currentColor === "white") {
        box.style.backgroundColor = "black";
        text.style.color="white";
        mode.style.backgroundColor="white";
        addTaskBtn.style.backgroundColor="white";
    } else {
        box.style.backgroundColor = "white";
        text.style.color="black";
        mode.style.backgroundColor="black";
        addTaskBtn.style.backgroundColor="black";
    }
    localStorage.setItem("currentColor", JSON.stringify(currentColor));
});