let text = document.getElementById("text")
let btn = document.getElementById("styleBtn")

btn.addEventListener("click", function () {
    text.style.color = "green";
    text.style.fontSize = "1000 px";
    text.style.fontWeight = "bold";
})