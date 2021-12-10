const taskInput = document.querySelector("#texto-tarefa");
const taskList = document.querySelector("#lista-tarefas");
const taskButton = document.querySelector("#criar-tarefa");

function loadButton() {
    taskButton.addEventListener("click", function () {
        if (taskInput.value === "") {
            return;
        }
        const li = document.createElement("li");
        li.innerText = taskInput.value;
        
        taskInput.value = "";
        taskList.appendChild(li);
    });
}

function loadTaskList() {
    taskList.addEventListener("click", changeBackgroundColorListener);
}

function changeBackgroundColorListener(event) {
    event.target.style.backgroundColor = "rgb(128, 128, 128)";
}

loadButton();
loadTaskList();