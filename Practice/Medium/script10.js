let item = document.getElementById("itemInput")
let btn = document.getElementById("addItem")
let list = document.getElementById("list")

btn.addEventListener("click", function () {
    let text = item.value.trimEnd();
    if (text === "") {
        return;
    }

    let li = document.createElement("li")
    li.textContent = text
    list.appendChild(li)

    item.value = ""
})