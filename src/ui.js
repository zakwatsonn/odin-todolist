import './styles.css'
import { project } from './project.js';

//initialise default project
let projectList = [];
let defaultProject = new project('Default');
defaultProject.createTodo('dildo', 'dildoDesc', 'NOWMOFO', 'high')
projectList.push(defaultProject);

defaultProject.createTodo('todo one', 'this is a test todo', 'due tomorrow', 'low priority');
console.log(JSON.parse(JSON.stringify(defaultProject)));
defaultProject.deleteTodo(defaultProject.todoList[0].id);
console.log(defaultProject);

//create button logic
let createButton = document.querySelector(".createButton");
let createMenu = document.querySelector(".menu");
let todoFormSub = document.querySelector(".todoForm");
let todoForm = document.querySelector(".todoFormContainer")
let projectChoice = document.querySelector('.pChoice')
let todoButton = document.querySelector('.newTodo')
let projectForm = document.querySelector('.projectFormContainer')
let projectButton = document.querySelector('.newProject')
let todoContainer = document.querySelector('.todoContainer')
let projectFormSub = document.querySelector('.projectForm')

function isOpen(menu) {
   return menu.classList.contains('open')
}

function openCloseMenu() {
    if (isOpen(projectForm)) {
        projectForm.classList.remove('open');
    } else if (isOpen(todoForm)) {
        todoForm.classList.remove('open');
    }
    createMenu.classList.toggle('open')
}
createButton.addEventListener('click', openCloseMenu);

//todoForm project append
function projectAppend() {
    while (projectChoice.firstChild) {
        projectChoice.removeChild(projectChoice.firstChild)
    }
    projectList.forEach((element) => {
        let option = document.createElement('option')
        option.value = element.projectName;
        option.textContent = element.projectName;
        projectChoice.appendChild(option);
    })
}

//new todo button logic
function openCloseTodoForm() {
    if (isOpen(projectForm)) {
        projectForm.classList.remove('open');
    }
    projectAppend();
    todoForm.classList.toggle('open')
}

todoButton.addEventListener('click', openCloseTodoForm)

//new project button logic
function openCloseProjectForm() {
    if (isOpen(todoForm)) {
        todoForm.classList.remove('open');
    }
    projectForm.classList.toggle('open')
}
projectButton.addEventListener('click', openCloseProjectForm)

//todo form submit logic
todoFormSub.addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = new FormData(todoFormSub)
    let selectedProjectName = formData.get('project')
    let selectedProject = projectList.find((proj) => proj.projectName === selectedProjectName);

    //change this, currently only selects default project
    selectedProject.createTodo(formData.get('title'), formData.get('description'), formData.get('due'), formData.get('priority'));
    console.log(projectList);
    displayTodos();
    openCloseTodoForm();
})

//projectform submit logic
projectFormSub.addEventListener('submit', (e) => {
    e.preventDefault();
    let pFormData = new FormData(projectFormSub)

    projectList.push(new project(pFormData.get('title')))
    console.log(projectList)
    openCloseProjectForm()
})

export function displayTodos() {
    while (todoContainer.firstChild) {
        todoContainer.removeChild(todoContainer.firstChild);
    }
    projectList.forEach((project) => {
        project.todoList.forEach((todo) => {
            let todoCard = document.createElement('div')
            todoCard.classList.add('todoCard')
            let todoCardButton = document.createElement('button')
            todoCardButton.classList.add('complete')
            todoCardButton.textContent = 'Done'
            let cardTitle = document.createElement('p')
            cardTitle.classList.add('cardTitle')
            cardTitle.textContent = todo.title
            let cardDesc = document.createElement('p')
            cardDesc.classList.add('cardDesc')
            cardDesc.textContent = todo.desc
            let cardProject = document.createElement('p')
            cardProject.classList.add('cardProj')
            cardProject.textContent = project.projectName

            todoCard.appendChild(todoCardButton)
            todoCard.appendChild(cardTitle)
            todoCard.appendChild(cardDesc)
            todoCard.appendChild(cardProject)
            todoContainer.appendChild(todoCard)
        })
    })
}
