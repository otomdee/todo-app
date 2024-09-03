import "./styles.css";
import {Task, Project, currentProjects, currentTasks, addProject} from "./tasks.js";


//addTask DOM dummy
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


//fxn addTaskToDOM
function renderTask(task) {
    const card = document.createElement("div");
    const cardTitle = document.createElement("span");
    const cardDesc = document.createElement("span");
    const cardDuedate = document.createElement("span");
    const cardPriority = document.createElement("span");


    [cardTitle, cardDesc, cardDuedate, cardPriority].forEach((item) => {
        item.classList.add("inline");
        card.append(item);
    })
    card.classList.add("taskCard");


    cardTitle.innerHTML = task.title;
    cardDesc.innerHTML = task.description;
    cardDuedate.innerHTML = task.duedate;
    cardPriority.innerHTML = task.priority;

    document.querySelector("#mainPage").append(card);
}

const mytask = new Task("bread", "buy bread", "2024-09-03", "high");
renderTask(mytask);