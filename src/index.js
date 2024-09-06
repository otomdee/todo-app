import "./styles.css";
import {Task, Project, currentProjects, currentTasks} from "./tasks.js";
import {renderTasks, highLightedTask, editInfo, renderProject} from "./taskDOM.js";
import { addModals } from "./modals.js";


const defaultProject = new Project("default", []);
defaultProject.tasksArray = currentTasks;
let highLightedProject = defaultProject;

addModals();

//dummy tasks
const mytask = new Task("bread", "buy bread", "2024-09-03", "low");
const task2 = new Task("paint", "get brush", "2024-09-03", "mid");


task2.addTask();
mytask.addTask();
renderTasks(highLightedProject.tasksArray);