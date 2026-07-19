let items = document.querySelectorAll("li");
let btn = document.getElementById("highlight");

btn.addEventListener("click", function () {
    items.forEach(function (li) {
        li.style.background = "yellow"
    })
})