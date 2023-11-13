function validateRegistrationForm() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (username == "") {
        alert("Név megadása kötelező!");
        return false;
    }else if(email == ""){
        alert("Email megadása kötelező!");
        return false;
    }else if(password == ""){
        alert("Jelszó megadása kötelező!");
        return false;
    }else if(password.length < 4){
        alert("A jelszónak minimum 4 karakter hosszúnak kell lennie.");
        return false;
    }
    return true;
}