const form = document.getElementById("signupForm")
const successMessage = document.getElementById("successMessage")
const displayname = document.getElementById("displayName")

form.addEventListener('submit', function (event) {
    event.preventDefault();
    let nameInput = document.getElementById("fname").value;
    displayname.textContent = nameInput;

    form.classList.add("hidden");
    successMessage.classList.remove("hidden")
})

form.addEventListener('submit', function (event) {
    event.preventDefault()
    let nameInput = document.getElementById('fname').value;
    displayname.textContent = nameInput;

    alert("Thanks for joining our group " + nameInput)
})