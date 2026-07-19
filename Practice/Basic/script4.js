let message = document.getElementById("msg")
let count = document.getElementById("count")

message.addEventListener("input", function () {
    count.textContent = message.value.length + " characters";
})