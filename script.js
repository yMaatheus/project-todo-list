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
    const element = event.target;
    if (element === document.querySelector(".selected")) {
        return;
    }
    resetSelect();
    element.style.backgroundColor = "rgb(128, 128, 128)";
    element.classList.add("selected");
}

function resetSelect() {
    const selecteds = document.getElementsByClassName("selected");
    if (selecteds.length > 0) {
        for (let selected of selecteds) {
            selected.style.backgroundColor = "white";
            selected.classList.remove("selected");
        }
    }
}

loadButton();
loadTaskList();