let link = document.getElementById("link")
let btn = document.getElementById("getBtn")
let out = document.getElementById("out")

btn.addEventListener("click", function () {
    let href = link.getAttribute("href")
    let target = link.getAttribute("target")

    out.innerHTML = "href: " + href + " | target: " + target

})