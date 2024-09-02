import "./styles.css";

let currentProjects = [];
let currentTasks = [];

class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
        changeTitle(newTitle) {
            this.title = newTitle;
        }
        changeDescription(newDescription) {
            this.description = newDescription;
        }
        changeDate(newDate) {
            this.dueDate = newDate;
        }
        changePriority(newPriority) {
            this.priority = newPriority;
        }
}

class Project {
    constructor(tasksArray) {
        this.tasksArray = tasksArray;
    }

    addTask(task) {
        this.tasksArray.push(task);
    }
}

function addTask(task) {
    currentProjects.push(task);
}

function addTaskToProject(task, project) {
    project.tasksArray.push(task);
}

function addProject(project) {

}