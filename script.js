let newTasks = [];

const taskMaker = (taskEvent) => {
  const parentTask = taskEvent.target;
  console.log(parentTask);
  const task = parentTask.elements;
  console.log(task);
  taskEvent.preventDefault();
  for (i = 0; i < task.length; i++) {
    if (task[i].id !== "BUTTON") {
      newTasks.push(task[i].value);
      // newTask = { "nome": task[i].value};
      const list = document.querySelector("ul");
      list.innerHTML +=
        `<li id= "${newTasks[newTasks.length - 1]}" > ${newTasks[newTasks.length - 1]} ` +
        `<button onclick="myFunction(id)" id="${newTasks[newTasks.length - 1]}"> Reset </button>`;
      task[i].value = "";
      const listItems = document.querySelectorAll("ul li");
    }
  }
};

function myFunction(id) {
  let oRow = document.getElementById(id);
  oRow.remove();
  let s = newTasks.findIndex((a) => a === id);
  console.log(s);
  newTasks.splice(s);
  console.log(newTasks);
}

taskMaker();
