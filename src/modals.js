import { renderProject, renderTasks, editInfo } from "./taskDOM.js";
import { currentProjects, currentTasks } from "./tasks.js";
import { Project, Task } from "./tasks.js";

export function addModals() {

//newTask modal
document.querySelector("#newTask").addEventListener("click", () => {
    document.querySelector("#taskDialog").showModal();
})
//click outside modal to close//
document.querySelector("#taskDialog").addEventListener("click", e => {
    const dialogDimensions = document.querySelector("#taskDialog").getBoundingClientRect()
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
        document.querySelector("#taskDialog").close()
    }
})


//EditTask modal
document.querySelector("#changeForm").addEventListener("submit", (event) => {
    event.preventDefault();
    editInfo(highLightedTask);
    document.querySelector("#changeForm").reset();
    document.querySelector("#changeDialog").close()
    renderTasks(currentTasks);
})
//click outside modal to close//
document.querySelector("#changeDialog").addEventListener("click", e => {
    const dialogDimensions = document.querySelector("#changeDialog").getBoundingClientRect()
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
        document.querySelector("#changeDialog").close()
    }
})

//take modal input, create task with it, render list of current tasks
const form = document.querySelector("#taskForm");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const title = document.querySelector("#titleInput");
    const description = document.querySelector("#descriptionInput");
    const date = document.querySelector("#dateInput");
    const priority = document.querySelector("input[name=priority]:checked");

    const task = new Task (title.value, description.value, date.value, priority.value);

    task.addTask();
    renderTasks(currentTasks);
    form.reset();
    document.querySelector("#taskDialog").close();
})


//newProject modal

    document.querySelectorAll(".projectsWrap")[0].addEventListener("click", () => {
        document.querySelector("#projectDialog").showModal();
    })

    //click outside modal to close//
    document.querySelector("#projectDialog").addEventListener("click", e => {
    const dialogDimensions = document.querySelector("#projectDialog").getBoundingClientRect()
        if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
        ) {
            document.querySelector("#projectDialog").close()
        }
    })

    const projectForm = document.querySelector("#projectForm");
    projectForm.addEventListener("submit", (event) => {
        event.preventDefault();
       const title = document.querySelector("#projectTitle").value;

       const project = new Project(title, []);
       project.addProject();
       projectForm.reset();
       renderProject(currentProjects);
       document.querySelector("#projectDialog").close();
    })
}