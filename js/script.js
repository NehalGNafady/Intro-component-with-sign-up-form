/*global $ , alert , JQuery */
function validate() {
    
    'use strict';
      
    if (document.myForm.firstname.value === "") {
         document.write("First name can't be empty");
        document.myForm.firstname.focus();
        return false;
    }
    if (document.myForm.lastname.value === "") {
        alert("Last name can't be empty!");
        document.myForm.lastname.focus();
        return false;
    }
    if (document.myForm.emailaddress.value === "") {
        alert("Looks like this not an email");
        document.myForm.emailaddress.focus();
        return false;
    }
    if (document.myForm.password.value === "") {
        alert("password can't be empty!");
        document.myForm.password.focus();
        return false;
    }
    return (true);
}