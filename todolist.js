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
