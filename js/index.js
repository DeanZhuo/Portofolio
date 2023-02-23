// get user's name at every entry to home page
var username = prompt("Enter your name:", "Dean");
if (username != null) {
    document.getElementById("username").innerText = " " + username;
    console.log("Hi " + username);
}

// function to get data, validate, and display from a form
function validateForm() {
    // get data
    var name = document.forms["sender-form"]["fName"].value
    + " " + document.forms["sender-form"]["lName"].value;
    var pNumber = document.forms["sender-form"]["pNumber"].value;
    var email = document.forms["sender-form"]["email"].value;
    var message = document.forms["sender-form"]["message"].value;

    // validation
    if (name == " " || pNumber == "" || email == "" || message == "") {
        alert("Please don't leave any of the form empty before submitting it");
        return false;
    }

    // display data
    document.getElementById("display-fullname").innerText = name;
    document.getElementById("display-pNumber").innerText = pNumber;
    document.getElementById("display-email").innerText = email;
    document.getElementById("display-message").innerText = message;

    //change username at the greeting section
    document.getElementById("username").innerText = " " + name;

    return false;
}