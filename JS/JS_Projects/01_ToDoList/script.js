//selecting the element by id and storing in const variable
document.addEventListener('DOMContentLoaded',()=>{
const todoInput = document.getElementById('todo-input');
const addTaskButton = document.getElementById('add-task-btn');
const todoList = document.getElementById('todo-list');


//creating a tasks list for storing all the tasks inside.
//parse it to lacalstorge inform of json file if not then be in empty list
let tasks = JSON.parse(localStorage.getItem("tasks") )|| []


//calling render task
tasks.forEach(task => renderTask(task));


//Adding the click eventlistener to perform operation
//for no input return 
//if input is there, then store data in newtask obj
addTaskButton.addEventListener("click", () =>{
  const taskText = todoInput.value.trim();
  if (taskText === " ") return;

  const newTask = {
    id: Date.now(),
    text: taskText,
    completed: false,
  };


//pushing that generated newtask to list 
  tasks.push(newTask);
  todoInput.value= " "; //clearing the input
  saveTasks();
  renderTask(newTask);
  console.log(tasks);
});


//Creating function for reading content from local storage:
function renderTask(task){
  const li = document.createElement('li')
  li.setAttribute('data-id',task.id)
  if(task.completed) li.classList.add('completed');
  li.innerHTML = `
  <span>${task.text}</span>
  <button>delete</button>`;


//Checking the target event and write function for the button
   li.addEventListener("click",(e) =>{
    if (e.target.tagName === "BUTTON") return;
    task.completed =! task.completed
    li.classList.toggle('completed')
    saveTasks();
   });


   li.querySelector('button').addEventListener('click',(e) =>{
    e.stopPropagation(); //prevent toggle from firing
    tasks = tasks.filter(t => t.id !== task.id);
    li.remove();
    saveTasks();
    })
  

  todoList.appendChild(li);

}

//passing the task item to local storage:
function saveTasks(){
  localStorage.setItem('tasks',JSON.stringify(tasks))
}
})