import trashIcon from "./trash.svg";
import { mainCurrentTask, setCurrentTask } from "./index.js";

export function renderProject(projects, currentTask, currentProject) {
    const listDiv = document.querySelector("#projectList");
    listDiv.innerHTML = "";
    projects.forEach((item) => {
        const div = document.createElement("div");
        const span = document.createElement("span");
        div.classList.add("projectDiv");
        div.append(span);
        span.innerHTML = item.title;

        listDiv.append(div);

        div.addEventListener("click", () => {
            currentProject = item;
            //change style to active class
            document.querySelectorAll(".projectDiv").forEach((div) => {
                div.classList.remove("activeDiv");
            });
            div.classList.add("activeDiv");
            //renderTasks within the project
            renderTasks(item.tasksArray, currentTask, currentProject);
        })

    })
}

export function renderTasks(array, currentTask, currentProject) {
    //clear current page
    document.querySelector("#mainPage").innerHTML = "";

    array.forEach((task) => {
    
    const card = document.createElement("div");
    const checkbox = document.createElement("input");
    const cardTitle = document.createElement("span");
    const cardDesc = document.createElement("span");
    const cardDuedate = document.createElement("span");
    const cardPriority = document.createElement("span");
    const edit = document.createElement("button");
    const trash = document.createElement("div");
    const trashImg = document.createElement("img");

    [checkbox, cardTitle, cardDesc, cardDuedate, cardPriority, edit, trash].forEach((item) => {
        item.classList.add("inline");
        card.append(item);
    })
    card.classList.add("taskCard");
    checkbox.type = "checkbox";

    cardTitle.innerHTML = task.title;
    cardDesc.innerHTML = task.description;
    cardDuedate.innerHTML = task.dueDate;
    cardPriority.innerHTML = task.priority;
    edit.innerHTML = "EDIT";
    trash.append(trashImg);
    trashImg.src = trashIcon;


    if (task.priority === "high") {
        cardPriority.classList.add("highPriority");
    }
    else if (task.priority === "mid") {
        cardPriority.classList.add("midPriority");
    }
    else if (task.priority === "low") {
        cardPriority.classList.add("lowPriority");
    }

    edit.addEventListener("click", () => {
        setCurrentTask(task);
        document.querySelector("#changeDialog").showModal();
    })
    modalBoundary(document.querySelector("#changeDialog"));

    trash.addEventListener("click", () => {
        for (let i = 0; i < currentProject.tasksArray.length; i++) {
            if (currentProject.tasksArray[i] === task) {
                currentProject.tasksArray.splice(i, 1);
                card.remove();
            }
        }
        renderTasks(currentProject.tasksArray, currentTask, currentProject);
    })

    document.querySelector("#mainPage").append(card);
    })
}

export function editInfo(task) {
    const title = document.querySelector("#changeTitle").value;
    const desc = document.querySelector("#changeDesc").value;
    const date = document.querySelector("#changeDate").value;
    const priority = document.querySelector("input[name=changePriority]:checked").value;

    task.title = title;
    task.description = desc;
    task.dueDate = date;
    task.priority = priority;
}

export function modalBoundary(modal) {
    modal.addEventListener("click", e => {
        const dialogDimensions = modal.getBoundingClientRect()
            if (
            e.clientX < dialogDimensions.left ||
            e.clientX > dialogDimensions.right ||
            e.clientY < dialogDimensions.top ||
            e.clientY > dialogDimensions.bottom
            ) {
                modal.close()
            }
        })
}