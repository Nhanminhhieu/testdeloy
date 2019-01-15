function checkInput()
{
    checkUsername();
    checkPass();
    checkEmail();
    checkBrithday();
}
//check username correct format
function checkUsername() {
    var usernameRegex = new RegExp("^[A-Za-z0-9]+$");
    var username = document.getElementById("username");
    if (username.value.length < 8) {
        document.getElementById("user__error").innerHTML = "Username length min 8 letter";
        return false;
    }
    if (usernameRegex.test(username.value) == false) {
        document.getElementById("user__error").innerHTML = "Invalid Username";
        return false;
    }
    document.getElementById("user__error").innerHTML = "";
    return true;
}
//check pass correct format
function checkPass() {
    var pass = document.getElementById("password");
    if (pass.value.length < 8) {
        document.getElementById("pass__error").innerHTML = "Password length min 8 letter";
        return false;
    }
    document.getElementById("pass__error").innerHTML = "";
    return true;
}
//check email correct format
function checkEmail() {
    var  emailRegex = new RegExp("^[a-z][a-z0-9_\\.]{5,32}@[a-z0-9]{2,}(\\.[a-z0-9]{2,4}){1,2}$");
    var email = document.getElementById("email");
    if (emailRegex.test(email.value) == false) {
        document.getElementById("email__error").innerHTML = "Invalid Email";
        return false;
    }
    else
        document.getElementById("email__error").innerHTML = "";
        return true;
}
//check username correct format
function checkBrithday() {
    var birth = document.getElementById("birthday");
    if(birth.value.length == 0)
    {
        document.getElementById("birth__error").innerHTML = "Please enter Brithday";
        return false;
    }
    var temp = birth.value.split("/");
    var dateBirth = temp[2] + "/"+ temp[1] + "/" + temp[0];
    if(Date.parse(dateBirth) > new Date()) {
        document.getElementById("birth__error").innerHTML = "Birthday must equal or less than day at the present";
        return false;
    }
     document.getElementById("birth__error").innerHTML = "";
     return true;
}
//reset all text input
function reSetText() {
    document.getElementById("user__error").innerHTML = "";
    document.getElementById("pass__error").innerHTML = "";
    document.getElementById("email__error").innerHTML = "";
    document.getElementById("birth__error").innerHTML = "";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("email").value = "";
    document.getElementById("birthday").value = "";
}