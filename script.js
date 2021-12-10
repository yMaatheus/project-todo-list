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

loadButton();