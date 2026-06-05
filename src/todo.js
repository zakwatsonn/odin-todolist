export class todo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.desc = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    get title() {
        return this.title;
    }

    get description() {
        return this.desc;
    }

    get priority() {
        return this.priority;
    }

    get dueDate() {
        return this.dueDate;
    }

    set title(newTitle) {
        this.title = newTitle;
    }

    set description(newDesc) {
        this.desc = newDesc;
    }

    set priority(newPriority) {
        this.priority = newPriority;
    }

    set dueDate(newDate) {
        this.dueDate = newDate;
    }
}