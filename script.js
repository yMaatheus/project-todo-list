const taskInput = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const taskButton = document.querySelector('#criar-tarefa');
const buttonDeleteAll = document.querySelector('#apaga-tudo');
const buttonRemoveFinished = document.querySelector('#remover-finalizados');
const buttonSaveTasks = document.querySelector('#salvar-tarefas');
const moveToUp = document.querySelector('#mover-cima');
const moveToDown = document.querySelector('#mover-baixo');
const removeTaskSelect = document.querySelector('#remover-selecionado');

function onClickCreateTaskEvent() {
  if (taskInput.value === '') {
    return;
  }
  const li = document.createElement('li');
  li.innerText = taskInput.value;

  taskInput.value = '';
  taskList.appendChild(li);
}

function resetSelect() {
  const array = document.getElementsByClassName('selected');
  if (array.length > 0) {
    for (let index = 0; index < array.length; index += 1) {
      const element = array[index];
      element.style.backgroundColor = 'white';
      element.classList.remove('selected');
    }
  }
}

function changeBackgroundColorEvent(event) {
  const element = event.target;
  if (element === document.querySelector('.selected')) {
    return;
  }
  resetSelect();
  element.style.backgroundColor = 'rgb(128, 128, 128)';
  element.classList.add('selected');
}

function completeListItemEvent(event) {
  const element = event.target;
  if (!element.classList.contains('completed')) {
    element.style.textDecoration = 'line-through';
    element.classList.add('completed');
    return;
  }
  element.classList.remove('completed');
  element.style.textDecoration = 'none';
}

function clearAllTasksEvent() {
  for (let index = taskList.childNodes.length - 1; index >= 0; index -= 1) {
    const li = taskList.childNodes[index];
    li.remove();
  }
}

function clearEndedTasksEvent() {
  for (let index = taskList.childNodes.length - 1; index >= 0; index -= 1) {
    const li = taskList.childNodes[index];
    if (li.classList.contains('completed')) {
      li.remove();
    }
  }
}

function onClickSaveTasksEvent() {
  localStorage.setItem('tasks', JSON.stringify(taskList.innerHTML));
}

function loadTaskList() {
  const localStorageTasks = localStorage.getItem('tasks');
  if (localStorageTasks === null) {
    return;
  }
  const localStorageTaskList = JSON.parse(localStorageTasks);
  taskList.innerHTML = localStorageTaskList;
}

function onClickButtonMoveToUpEvent() {
  const task = document.querySelector('.selected');
  if ((!task) || (!task.previousElementSibling)) {
    return;
  }
  taskList.insertBefore(task, task.previousElementSibling);
}

function onClickButtonMoveToDownEvent() {
  const task = document.querySelector('.selected');
  if ((!task) || (!task.nextElementSibling)) {
    return;
  }
  taskList.insertBefore(task.nextElementSibling, task);
}

function onClickRemoveTaskSelect() {
  const task = document.querySelector('.selected');
  if (!task) {
    return;
  }
  task.remove();
}

window.onload = () => {
  taskButton.addEventListener('click', onClickCreateTaskEvent);
  taskList.addEventListener('dblclick', completeListItemEvent);
  taskList.addEventListener('click', changeBackgroundColorEvent);
  buttonDeleteAll.addEventListener('click', clearAllTasksEvent);
  buttonRemoveFinished.addEventListener('click', clearEndedTasksEvent);
  buttonSaveTasks.addEventListener('click', onClickSaveTasksEvent);
  moveToUp.addEventListener('click', onClickButtonMoveToUpEvent);
  moveToDown.addEventListener('click', onClickButtonMoveToDownEvent);
  removeTaskSelect.addEventListener('click', onClickRemoveTaskSelect);
  loadTaskList();
};
