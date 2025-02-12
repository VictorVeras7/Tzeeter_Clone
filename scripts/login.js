document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const loginButton = document.querySelector(".login-btn");
    const emailError = document.getElementById("email-error");

    const iconError = document.querySelector(".icon-error");
    const iconSuccessEmail = document.querySelector(".input-group .icon-success");
    const iconSuccessPassword = document.querySelectorAll(".icon-success")[1];

    function validateForm() {
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        let validEmail = false;
        let validPassword = password.length > 0;

        // Validação do email
        if (emailPattern.test(email)) {
            emailInput.classList.add("valid");
            emailInput.classList.remove("error");
            emailError.style.display = "none";
            iconError.style.display = "none";
            iconSuccessEmail.style.display = "block";
            validEmail = true;
        } else {
            emailInput.classList.add("error");
            emailInput.classList.remove("valid");
            emailError.style.display = "block";
            iconError.style.display = "block";
            iconSuccessEmail.style.display = "none";
            validEmail = false;
        }

        // Validação da senha
        if (validPassword) {
            passwordInput.classList.add("valid");
            iconSuccessPassword.style.display = "block";
        } else {
            passwordInput.classList.remove("valid");
            iconSuccessPassword.style.display = "none";
        }

        // Ativar o botão apenas se email e senha forem válidos
        if (validEmail && validPassword) {
            loginButton.disabled = false;
            loginButton.classList.add("valid");
        } else {
            loginButton.disabled = true;
            loginButton.classList.remove("valid");
        }
    }

    // Eventos de input
    emailInput.addEventListener("input", validateForm);
    passwordInput.addEventListener("input", validateForm);
});
