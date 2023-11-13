function validateRegistrationForm() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (username == "") {
        alert("Felhasználónév megadása kötelező!");
        return false;
    }else if(email == ""){
        alert("Email megadása kötelező!");
        return false;
    }else if(password == ""){
        alert("Jelszó megadása kötelező!");
        return false;
    }
    return true;
}