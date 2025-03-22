document.addEventListener("DOMContentLoaded", function () {
  
  const formSignIn = document.getElementById("formsignin");
  const emailInput = document.getElementById("emailsignin");
  const passwordInput = document.getElementById("passwordsignin");
  const errorMessage = document.getElementById("errormessage1");
  const signInBtn = document.getElementById("signinbtn");
   

  const formSignup = document.getElementById("formsignup");
  const emailInputup = document.getElementById("emailsignup");
  const passwordInputup = document.getElementById("passwordsignup");
  const errorMessageup = document.getElementById("errormessage");
  const signUpBtn = document.getElementById("signupbtn");
  const firstnameInput = document.getElementById("firstname");
  const lastnameInput = document.getElementById("lastname");
  const checkboxInput = document.getElementById("checkbox");


  function showError(element, message) {
   element.textContent = message;
   element.style.color = "red";

    setTimeout(() => {
    element.textContent = "";
      }, 5000);
  }

  function isValidEmail(email) {
   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     return emailPattern.test(email);
  }
  const isValidPassword = (password) => {
    return password.length < 6 ? "Password must be at least 6 characters long" : "Valid password";
 };
 const validatecheckbox = (checkbox) => {
  return true;
 };

/*
  function isValidPassword(password) {
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/;
    return passwordPattern.test(password);
  }
*/

 signInBtn.addEventListener("click", function (event) {
    event.preventDefault();

   const email = emailInput.value.trim();
   const password = passwordInput.value.trim();

   if (!email || !password) {
     showError(errorMessage,"Please fill in all fields!");
    }
   else if (!isValidEmail(email)) {
     showError(errorMessage,"Enter a valid email address!");
    }
   else if (!isValidPassword(password)) {
      showError(errorMessage,"Password must be at least 6 characters long and include at least one uppercase letter, one number, and one special character.");
    }
   else {
      errorMessage.textContent = "Login Successful";
      errorMessage.style.color = "green";
      window.location.href = "DeFi View2.html";
    }
 });

 /*
    let formSignup = document.getElementById("formsignup");
    let emailInput = document.getElementById("emailsignup");
    let passwordInput = document.getElementById("passwordsignup");
    let errorMessage = document.getElementById("errormessage");
    let signUpBtn = document.getElementById("signupbtn");
    let firstnameInput = document.getElementById("firstname");
    let lastnameInput = document.getElementById("lastname");
    let checkboxInput = document.getElementById("checkbox");

  function showError(element, message) {
    element.textContent = message;
    element.style.color = "red";

        setTimeout(() => {
            element.textContent = "";
        }, 5000);
  }

 function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
  }

 function isValidPassword(password) {
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/;
     return passwordPattern.test(password);
    }
  */  
    signUpBtn.addEventListener("click", function (event) {
        event.preventDefault();

        const email = emailInputup.value.trim();
        const password = passwordInputup.value.trim();
        const firstname = firstnameInput.value.trim();
        const lastname = lastnameInput.value.trim();

        if (!email || !password || !firstname || !lastname) {
            showError(errorMessageup,"Please fill in all fields!");
        } 
        else if (!checkboxInput.checked){
          showError(errorMessageup,"Agree to the terms and conditions!")
          return false;
        }
        else if (!isValidEmail(email)) {
            showError(errorMessageup,"Enter a valid email address!");
        }
        else if (!isValidPassword(password)) {
            showError(errorMessageup,"Password must be at least 6 characters long and include at least one uppercase letter, one number, and one special character.");
        } 
        else {
            errorMessageup.textContent = "Login Successful";
            errorMessageup.style.color = "green";
            window.location.href = "DeFi View2.html";
        }
    });
});


