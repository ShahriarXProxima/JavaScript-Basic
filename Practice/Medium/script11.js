let taskInput = document.getElementById("taskInput ")
let btn = document.getElementById("add")
let tasks = document.getElementById("tasks");

btn.addEventListener("click", function () {
    let text = taskInput.value.trim()
    if (text === "") {
        return
    }

    let li = document.createElement("li")
    li.textContent = text + " "

    let del = document.createElement("button")
    del.textContent = "Delete"
    del.addEventListener("click", function () {
        li.remove();
    })

    li.appendChild(del)
    tasks.appendChild(li)
    taskInput.value = ""
})