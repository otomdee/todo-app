import "./styles.css";
import {Task, Project, currentProjects, currentTasks, addProject} from "./tasks.js";


//show new task modal
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


//fxn render list of tasks
function renderTasks(tasks) {

    tasks.forEach((task) => {
    
    const card = document.createElement("div");
    const checkbox = document.createElement("input");
    const cardTitle = document.createElement("span");
    const cardDesc = document.createElement("span");
    const cardDuedate = document.createElement("span");
    const cardPriority = document.createElement("span");


    [checkbox, cardTitle, cardDesc, cardDuedate, cardPriority].forEach((item) => {
        item.classList.add("inline");
        card.append(item);
    })
    card.classList.add("taskCard");
    checkbox.type = "checkbox";

    cardTitle.innerHTML = task.title;
    cardDesc.innerHTML = task.description;
    cardDuedate.innerHTML = task.dueDate;
    cardPriority.innerHTML = task.priority;

    if (task.priority === "high") {
        cardPriority.classList.add("highPriority");
    }
    else if (task.priority === "mid") {
        cardPriority.classList.add("midPriority")
    }
    else if (task.priority === "low") {
        cardPriority.classList.add("lowPriority");
    }


    document.querySelector("#mainPage").append(card);
    })
    
}

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

//dummy tasks
const mytask = new Task("bread", "buy bread", "2024-09-03", "low");
const task2 = new Task("paint", "get brush", "2024-09-03", "mid");

task2.addTask();
mytask.addTask();
renderTasks(currentTasks);
