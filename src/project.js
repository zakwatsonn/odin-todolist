import { todo } from "./todo.js";

export class project {
    constructor(projectName) {
        this.projectName = projectName;
        this.todoList = [];
    }

    createTodo(title, desc, due, priority) {
        this.todoList.push(new todo(title, desc, due, priority));
    }

    deleteTodo(id) {
        this.todoList = this.todoList.filter(todo => todo.id !== id);
    }
}