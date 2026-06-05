export class todo {
    constructor(title, description) {
        this.title = title;
        this.desc = description;
    }

    get title() {
        return this.title;
    }

    get description() {
        return this.desc;
    }

    set title(newTitle) {
        this.title = newTitle;
    }

    set description(newDesc) {
        this.desc = newDesc;
    }
}