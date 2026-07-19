let buttons = document.querySelectorAll(".c")

buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
        document.body.style.backgroundColor = btn.dataset.color;
    })
})