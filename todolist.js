/*let tasks = [];
let newTask = document.getElementById("newTask");
let taskList = document.getElementById("taskList");
let btnAdd = document.getElementById("addTask");

btnAdd.addEventListener("click", () => {
    if (newTask.value.trim() !== "") {
        tasks.push(newTask.value);
        updateTaskList();
        newTask.value = ''; // Clear the input field after adding the task
    } else {
        alert("You must enter a task!!");
    }
});

function updateTaskList() {
    taskList.innerHTML = ''; // Clear the current list before updating
    tasks.forEach((task, index) => {
        let html = `
            <li class="h5 text-center">
                <div class="row p-2">
                    <div class="col">
                        ${task}
                    </div>
                    <div class="col">
                        <i class="bi bi-x-circle text-primary closeBtn" data-index="${index}" style="font-size: 1.5rem; cursor: pointer;"></i>
                    </div>
                </div>
            </li>`;
        taskList.innerHTML += html;
    });
    removeTask();
}

function removeTask() {
    let closeBtns = document.querySelectorAll(".closeBtn");
    closeBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            let index = e.target.getAttribute("data-index");
            tasks.splice(index, 1); // Remove the task from the array
            updateTaskList(); // Update the list after deletion
        });
    });
}*/
let newTask = document.getElementById("newTask");
let taskList = document.getElementById("taskList");
let btnAdd = document.getElementById("addTask");

btnAdd.addEventListener("click", () => {
    if (newTask.value.trim() !== "") {
        let listItem = document.createElement("li");
        listItem.className = "h5 text-center p-2";
        listItem.innerHTML = `<div class="row p-2">
                    <div class="col">
                    ${newTask.value}
                    </div>
                    <div class="col">
                        <i class="bi bi-x-circle text-primary" style="font-size: 1.5rem; cursor: pointer;"></i>
                    </div>
                </div>`;
        taskList.appendChild(listItem);
        let removeTask = listItem.querySelector("i");
        removeTask.addEventListener("click", () => {
            taskList.removeChild(listItem);
        });
        newTask.value = '';
    } 
    else{
        alert("You must enter a task!!");
        newTask.value = '';
    }
});
