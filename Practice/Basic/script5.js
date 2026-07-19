let toggle = document.getElementById("toggle")
let para = document.getElementById("para")

toggle.addEventListener("click", function () {
    if (para.style.display !== "none") {
        para.style.display = "none"
    } else {
        para.style.display = "block"
    }
})