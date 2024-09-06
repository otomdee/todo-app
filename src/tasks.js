let currentProjects = [];
let currentTasks = [];

class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
        addTask() {
            currentTasks.push(this);
        }
}

class Project {
    constructor(title, tasksArray) {
        this.title = title;
        this.tasksArray = tasksArray;
    }

    addTask(task) {
        this.tasksArray.push(task);
    }

    addProject() {
        currentProjects.push(this);
    }
}

export {Task, Project, currentProjects, currentTasks};