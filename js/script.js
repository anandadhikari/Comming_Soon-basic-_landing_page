function emailCheck() {
    let email = document.getElementById("Email").value
    let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (email.match(pattern)) {
        document.getElementById("error-msg").innerHTML = "Thank you!"
        return false
    }
    else {
        document.getElementById("error-msg").innerHTML = "Please provide a valid email"
        document.getElementById("error-icon").style.display = "inline-block"
        return false
    }
}