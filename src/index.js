import "./styles.css";
import { renderProject, renderTasks, editInfo, modalBoundary, } from "./functions.js";

//projects
class Project {
    constructor(title, tasksArray) {
        this.title = title;
        this.tasksArray = tasksArray;
    }

    addToProjects(projects) {
        projects.push(this);
    }
}

let currentProject;
export let mainCurrentTask = "empty";
export function setCurrentTask(value) {
    mainCurrentTask = value; // Provide a setter function to update currentTask
}

const toDoProjects = [];
const defaultProject = new Project("default", []);
defaultProject.addToProjects(toDoProjects);
renderProject(toDoProjects, mainCurrentTask, currentProject);

currentProject = defaultProject;

//project event listeners
const projectClick = document.querySelectorAll(".projectsWrap")[0];
const projectDialog = document.querySelector("#projectDialog");

projectClick.addEventListener("click", () => {
    projectDialog.showModal();
})
modalBoundary(projectDialog);
const projectForm = document.querySelector("#projectForm");
projectForm.addEventListener("submit", (event) => {
       event.preventDefault();
       const title = document.querySelector("#projectTitle").value;

       const project = new Project(title, []);
       project.addToProjects(toDoProjects);
       projectForm.reset();
       projectDialog.close();
       renderProject(toDoProjects, mainCurrentTask, currentProject);
})

//create new task
class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
        addTask() {
            currentProject.tasksArray.push(this);
        }
}

//newTask listener
const newTaskButton = document.querySelector("#newTask");
const newTaskDialog = document.querySelector("#taskDialog");
newTaskButton.addEventListener("click", () => {
    newTaskDialog.showModal();
});
modalBoundary(newTaskDialog);
const form = document.querySelector("#taskForm");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const title = document.querySelector("#titleInput");
    const description = document.querySelector("#descriptionInput");
    const date = document.querySelector("#dateInput");
    const priority = document.querySelector("input[name=priority]:checked");

    const task = new Task (title.value, description.value, date.value, priority.value);

    task.addTask();
    renderTasks(currentProject.tasksArray, mainCurrentTask, currentProject);
    form.reset();
    newTaskDialog.close();
})

//edit task modal(listener is in renderTasks function)
document.querySelector("#changeForm").addEventListener("submit", (event) => {
    event.preventDefault();

    //editInfo(currentTask);
    editInfo(mainCurrentTask);
    renderTasks(currentProject.tasksArray, mainCurrentTask, currentProject);
    document.querySelector("#changeForm").reset();
    document.querySelector("#changeDialog").close()
})