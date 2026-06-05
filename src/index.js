import './styles.css'
import { project } from "./project.js";

let projectList = [];
let defaultProject = new project('default');
projectList.push(defaultProject);

//create button logic
let createButton = document.querySelector(".createButton");
let createMenu = document.querySelector(".menu");

function openCloseMenu() {
    createMenu.classList.toggle('open')
}
createButton.addEventListener('click', openCloseMenu);



defaultProject.createTodo('todo one', 'this is a test todo', 'due tomorrow', 'low priority');
console.log(JSON.parse(JSON.stringify(defaultProject)));
defaultProject.deleteTodo(defaultProject.todoList[0].id);
console.log(defaultProject);