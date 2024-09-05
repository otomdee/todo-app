//edit task info
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