
document.getElementById("loginForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Prevents page reload

            let username = document.getElementById("username").value;
            let password = document.getElementById("password").value;

            if (username && password) {
                localStorage.setItem("username", username);
                localStorage.setItem("password", password); // Not secure! Just for demo.

                window.location.href = "dashboard.html"; // Redirect to new page
            } else {
                alert("Please fill in all fields!");
            }
        });



        document.getElementById("displayUsername").innerText = localStorage.getItem("username") || "Guest";

        function logout() {
            localStorage.removeItem("username");
            localStorage.removeItem("password");
            window.location.href = "login.html";
        }