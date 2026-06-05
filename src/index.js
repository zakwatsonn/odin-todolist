import './styles.css'
import { project } from "./project.js";

let defaultProject = new project('default');
defaultProject.createTodo('todo one', 'this is a test todo', 'due tomorrow', 'low priority');

console.log(JSON.parse(JSON.stringify(defaultProject)));çç

defaultProject.deleteTodo(defaultProject.todoList[0].id);

console.log(defaultProject);