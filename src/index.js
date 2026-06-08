import './styles.css'
import './ui.js'
import { project } from "./project.js";

let projectList = [];
let defaultProject = new project('default');
projectList.push(defaultProject);

defaultProject.createTodo('todo one', 'this is a test todo', 'due tomorrow', 'low priority');
console.log(JSON.parse(JSON.stringify(defaultProject)));
defaultProject.deleteTodo(defaultProject.todoList[0].id);
console.log(defaultProject);