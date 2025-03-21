document.addEventListener("DOMContentLoaded", function () {

  let formSignIn = document.getElementById("formsignin");
  let emailInput = document.getElementById("emailsignin");
  let passwordInput = document.getElementById("passwordsignin");
  let errorMessage = document.getElementById("errormessage1");
  let signInBtn = document.getElementById("signinbtn");

  function showError(message) {
   errorMessage.textContent = message;
   errorMessage.style.color = "red";

    setTimeout(() => {
    errorMessage.textContent = "";
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

 signInBtn.addEventListener("click", function (event) {
    event.preventDefault();

   const email = emailInput.value.trim();
   const password = passwordInput.value.trim();

   if (!email || !password) {
     showError("Please fill in all fields!");
    }
   else if (!isValidEmail(email)) {
     showError("Enter a valid email address!");
    }
   else if (!isValidPassword(password)) {
      showError("Password must be at least 6 characters long and include at least one uppercase letter, one number, and one special character.");
    }
   else {
      errorMessage.textContent = "Login Successful";
      errorMessage.style.color = "green";
         window.location.href = "DeFi View2.html";
        }
    });

    document.addEventListener("DOMContentLoaded", function () {
    // Get elements
    const formSignIn = document.getElementById("formsignin");
    const emailInput = document.getElementById("emailsignin");
    const passwordInput = document.getElementById("passwordsignin");
    const errorMessage = document.getElementById("errormessage1");
    const signInBtn = document.getElementById("signinbtn");

    // Function to display error messages
    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.color = "red";

        setTimeout(() => {
            errorMessage.textContent = "";
        }, 5000);
    }

    // Function to validate email format
    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    // Function to validate password strength
    function isValidPassword(password) {
        // Require at least 6 characters, one uppercase letter, one number, and one special character
        const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/;
        return passwordPattern.test(password);
    }

    // Handle sign-in button click
    signInBtn.addEventListener("click", function (event) {
        event.preventDefault(); // Prevents form from refreshing

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (!email || !password) {
            showError("Please fill in all fields!");
        } else if (!isValidEmail(email)) {
            showError("Enter a valid email address!");
        } else if (!isValidPassword(password)) {
            showError("Password must be at least 6 characters long and include at least one uppercase letter, one number, and one special character.");
        } else {
            errorMessage.textContent = "Login Successful";
            errorMessage.style.color = "green";

            // Redirect to another page after successful validation
            window.location.href = "dashboard.html"; // Change this to your actual page
        }
    });
});
});