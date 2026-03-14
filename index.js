let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            <span>${task}</span>
            <button class="delete" onclick="deleteTask(${index})">Delete</button>
        `;

        taskList.appendChild(li);
    });
}
function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    tasks.push(taskText);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    input.value = "";
    renderTasks();
}
function deleteTask(index) {
    tasks.splice(index, 1);

    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}
renderTasks();