let signup = document.getElementById("signup")
let done = document.getElementById("done")
let ok = true

function showError(id, msg) {
    let error = document.getElementById(id)
    error.textContent = msg
    error.style.color = "red"
}

signup.addEventListener("submit", function () {
    let user = document.getElementById("user").value.trim()
    let mail = document.getElementById("mail").value.trim()
    let pass = document.getElementById("pass").value

    if (user === "") {
        showError("e-user", "Username requires");
        ok = false
    } else {
        showError("e-user", "")
    }

    if (!mail.includes("@")) {
        showError("e-mail", "Invalid mail")
        ok = false
    } else {
        showError("e-mail", "");
    }

    if (pass.length < 6) {
        showError("e-pass", "Minimum 6 Characters")
        ok = false
    } else {
        showError("e-pass", "")
    }

    done.textContent = ok ? "Success!" : ""
})
