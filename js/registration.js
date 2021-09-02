/*modified by Ricky Jj*/
function validateForm() {
    var userName = document.forms["myForm"]["userName"].value;
    var password = document.forms["myForm"]["password"].value;
    var passwordVerify = document.forms["myForm"]["passwordVerify"].value;
    var firstName = document.forms["myForm"]["firstName"].value;
    var lastName = document.forms["myForm"]["lastName"].value;
    var email = document.forms["myForm"]["email"].value;
    var phoneNumber = document.forms["myForm"]["phoneNumber"].value;
    var signUpNewsletter = document.forms["myForm"]["signUpNewsletter"].value;

    if (userName == null || userName == "" || password == null || password == "" || passwordVerify == null || passwordVerify == "" || firstName == null || firstName == "" || lastName == null || lastName == "" || email == null || email == "" || phoneNumber == null || phoneNumber == "" || signUpNewsletter == null || signUpNewsletter == "") {
            document.getElementById("allFilled").innerHTML = "*All fields are required";
            return false;
    }

    var isAlphanumeric = /^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$/i.test(userName);
  
    if(!isAlphanumeric) {
        document.getElementById("allFilled").innerHTML = "";
        document.getElementById("erroruserName").innerHTML = "Username should only contain alphabets and numbers both---e.g user12";
        return false;
    }

    var passwordLength = password.length;
  
    if(passwordLength < 8){
        document.getElementById("allFilled").innerHTML = "";
        document.getElementById("erroruserName").innerHTML = "";
        document.getElementById("errorpassword").innerHTML = "Password should minimum be of 8 characters";
        return false;
    }

    if(password != passwordVerify) {
        document.getElementById("allFilled").innerHTML = "";
        document.getElementById("erroruserName").innerHTML = "";
        document.getElementById("errorpassword").innerHTML = "";
        document.getElementById("errorpasswordVerify").innerHTML = "Password does not match!";
        return false;
    }

    if(!isEmailValid(email)) {
        document.getElementById("allFilled").innerHTML = "";
        document.getElementById("erroruserName").innerHTML = "";
        document.getElementById("errorpassword").innerHTML = "";
        document.getElementById("errorpasswordVerify").innerHTML = "";
        document.getElementById("erroremail").innerHTML = "email not valid!---use xxx@xxx.xxx format";
        return false;
    }

    var isPhoneNumber = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/.test(phoneNumber);

    if(!isPhoneNumber) {
        document.getElementById("allFilled").innerHTML = "";
        document.getElementById("erroruserName").innerHTML = "";
        document.getElementById("errorpassword").innerHTML = "";
        document.getElementById("errorpasswordVerify").innerHTML = "";
        document.getElementById("erroremail").innerHTML = "";
        document.getElementById("errorphoneNumber").innerHTML = "phoneNumber not valid!---use (xxx) xxx-xxxx  format";
        return false;
    }

    document.getElementById("allFilled").innerHTML = "";
    document.getElementById("erroruserName").innerHTML = "";
    document.getElementById("errorpassword").innerHTML = "";
    document.getElementById("errorpasswordVerify").innerHTML = "";
    document.getElementById("erroremail").innerHTML = "";
    document.getElementById("errorphoneNumber").innerHTML = "";
    return true;

}

function isEmailValid(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


