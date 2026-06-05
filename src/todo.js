export class todo {
    constructor(title, description, dueDate, priority) {
        this.id = crypto.randomUUID()
        this.title = title;
        this.desc = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}