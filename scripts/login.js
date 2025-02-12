document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const loginButton = document.querySelector(".login-btn");
    const emailError = document.getElementById("email-error");

    function validateForm() {
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        let validEmail = emailPattern.test(email);
        let validPassword = password.length > 6;

        if (validEmail) {
            emailInput.classList.add("valid");
            emailInput.classList.remove("error");
            emailError.style.display = "none";
        } else {
            emailInput.classList.add("error");
            emailInput.classList.remove("valid");
            emailError.style.display = "block";
        }

        if (validPassword) {
            passwordInput.classList.add("valid");
        } else {
            passwordInput.classList.remove("valid");
        }

        loginButton.disabled = !(validEmail && validPassword);
    }

    emailInput.addEventListener("input", validateForm);
    passwordInput.addEventListener("input", validateForm);
});
