import "./styles.css";
import {Task, Project, currentProjects, currentTasks} from "./tasks.js";

document.querySelector("#newTask").addEventListener("click", () => {
    document.querySelector("#taskDialog").showModal();
})