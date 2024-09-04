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
}

function addProject(projectName) {
    const project = new Project(projectName, []);
    currentProjects.push(project);
}

export {Task, Project, currentProjects, currentTasks, addProject};