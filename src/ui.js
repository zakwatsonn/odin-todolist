import './styles.css'
import { project } from './project.js';

//create button logic
let createButton = document.querySelector(".createButton");
let createMenu = document.querySelector(".menu");
let todoFormSubmit = document.querySelector(".submitButton");
let todoForm = document.querySelector(".todoFormContainer")
let todoButton = document.querySelector('.newTodo')
let projectForm = document.querySelector('.projectFormContainer')
let projectButton = document.querySelector('.newProject')

function openCloseMenu() {
    if (projectForm.classList.contains('open')) {
        projectForm.classList.remove('open');
    } else if (todoForm.classList.contains('open')) {
        todoForm.classList.remove('open');
    }
    createMenu.classList.toggle('open')
}
createButton.addEventListener('click', openCloseMenu);

//new todo button logic
function openCloseTodoForm() {
    if (projectForm.classList.contains('open')) {
        projectForm.classList.remove('open');
    }
    todoForm.classList.toggle('open')
}
todoButton.addEventListener('click', openCloseTodoForm)

//new project button logic
function openCloseProjectForm() {
    if (todoForm.classList.contains('open')) {
        todoForm.classList.remove('open');
    }
    projectForm.classList.toggle('open')
}
projectButton.addEventListener('click', openCloseProjectForm)
