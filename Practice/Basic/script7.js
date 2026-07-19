let pic = document.getElementById("pic");
let btn = document.getElementById("swap");

btn.addEventListener("click", function () {
    pic.setAttribute("src", "dog.jpg");
    pic.setAttribute("alt", "A dog");
})