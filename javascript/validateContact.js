// constant varibale for A-z characters to use for regex checks on form
const letterPattern = /^[A-Za-z]+$/;


/**
 * validateForm function is a wrapper function to call each validation function for the program
 * @param event is the action being done on the form
 * @returns an alert if there is a failure in any of the validation checks
 */
function validateForm(event) {
    // prevent any default action of the form to control how errors and flow is being handled
    event.preventDefault();
    
    // assign value of each function to a variable for conditional check
    let validFirstName = validateFirstName();
    let validLastName = validateLastName();

    // if any of the values are false then throw an alert to user so they can fix the errors before submission
    if (!validFirstName || !validLastName) {
        return;
    }

    // validated form can be submitted to destination 
    event.target.submit();

}

/**
 * validateFirstName checks First Name input into form to see if it is valid or not 
 * @returns true if there are no errors, or false if there are errors based on the validation checks
 */
function validateFirstName() {
    // grab input value from DOM
    let firstName = document.getElementById("firstName");

    // check to see if the input is more than or equal to 2 characters, not null, empty string or not
    if (firstName.value.length < 2 || firstName.value == null || firstName.value == "") {
        // change message using DOM manipulation to show error and change text color to user
        document.getElementById("firstNameErrorMessage").innerHTML = ("<span style='color:red'> Invalid name! First name must contain two (2) or more characters.</span>");
        // focus on text input and return false to not submit form
        firstName.focus();
        return false;
    }
    // check to see if the input matches regex pattern defined at top of the file )only A-z characters)
    if (!(firstName.value.match(letterPattern))) {
        // change message using DOM manipulation to show error and change text color to user
        document.getElementById("firstNameErrorMessage").innerHTML = ("<span style='color:red'> Invalid name! First name must contain only alphabetic characters.</span>");
        // focus on text input and return false to not submit form
        firstName.focus();
        return false;
    }
    
    // return true if input is valid
    document.getElementById("firstNameErrorMessage").innerHTML = ("");
    return true;   

}

/**
 * validateLastName checks Last Name input into form to see if it is valid or not 
 * @returns true if there are no errors, or false if there are errors based on the validation checks
 */
function validateLastName() {
    // grab input value from DOM
    let lastName = document.getElementById("lastName");

    // check to see if the input is more than or equal to 2 characters, not null, empty string or not
    if (lastName.value.length < 2 || lastName.value == null || lastName.value == "") {
        // change message using DOM manipulation to show error and change text color to user
        document.getElementById("lastNameErrorMessage").innerHTML = ("<span style='color:red'> Invalid name! Last name must contain two (2) or more characters.</span>");
        // focus on text input and return false to not submit form
        lastName.focus();
        return false;
    }
    // check to see if the input matches regex pattern defined at top of the file )only A-z characters)
    if (!(lastName.value.match(letterPattern))) {
        // change message using DOM manipulation to show error and change text color to user
        document.getElementById("lastNameErrorMessage").innerHTML = ("<span style='color:red'> Invalid name! Last name must contain only alphabetic characters.</span>");
        // focus on text input and return false to not submit form
        lastName.focus();
        return false;
    }

    // return true if input is valid
    document.getElementById("lastNameErrorMessage").innerHTML = ("");
    return true;
}

