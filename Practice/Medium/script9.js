let fruit = document.getElementById("fruit")
let info = document.getElementById("info")

function update() {
    info.textContent = "Total option: " + fruit.options.length + " | Selected: " + fruit.value;
}

update()
fruit.addEventListener("change", update)