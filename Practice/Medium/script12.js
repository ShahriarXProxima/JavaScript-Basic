let form  = document.getElementById("myForm")
let result = document.getElementById("result")

form.addEventListener("submit" ,function(event){
    event.preventDefault();

    let name= document.getElementById("name").value
    let email = document.getElementById("email").value

    result.innerHTML="<p><strong>Name: </strong>" + name + "</p>" +
        "<p><strong>Email: </strong>" + email + "</p>"
})