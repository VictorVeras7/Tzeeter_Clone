document.addEventListener("DOMContentLoaded", function () {
    const daySelect = document.getElementById("day");
    const yearSelect = document.getElementById("year");
    const monthSelect = document.getElementById("month");
    const submitBtn = document.getElementById("submitBtn");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const agree = document.getElementById("agree");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");
    const dobError = document.getElementById("dobError");
    const termsError = document.getElementById("termsError");

    function updateDays() {
        const month = monthSelect.value;
        const year = yearSelect.value;
        let days = 31;
        if (month == 4 || month == 6 || month == 9 || month == 11) days = 30;
        else if (month == 2) days = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? 29 : 28;
        
        daySelect.innerHTML = '<option value="">Dia</option>';
        for (let i = 1; i <= days; i++) {
            daySelect.innerHTML += `<option value="${i}">${i}</option>`;
        }
    }

    function populateYears() {
        const currentYear = new Date().getFullYear();
        yearSelect.innerHTML = '<option value="">Ano</option>';
        for (let i = currentYear - 100; i <= currentYear; i++) {
            yearSelect.innerHTML += `<option value="${i}">${i}</option>`;
        }
    }

    function validateForm() {
        let valid = true;
        
        if (!nameInput.value.trim()) {
            nameError.textContent = "Por favor, informe um nome de usuário.";
            nameInput.classList.add("error");
            valid = false;
        } else {
            nameError.textContent = "";
            nameInput.classList.remove("error");
        }

        if (!emailInput.value.trim()) {
            emailError.textContent = "Informe um email válido.";
            emailInput.classList.add("error");
            valid = false;
        } else {
            emailError.textContent = "";
            emailInput.classList.remove("error");
        }

        if (password.value.length < 6) {
            passwordError.textContent = "A senha é obrigatória e deve ter pelo menos 6 caracteres.";
            password.classList.add("error");
            valid = false;
        } else {
            passwordError.textContent = "";
            password.classList.remove("error");
        }

        if (password.value !== confirmPassword.value) {
            confirmPasswordError.textContent = "As senhas devem coincidir.";
            confirmPassword.classList.add("error");
            valid = false;
        } else {
            confirmPasswordError.textContent = "";
            confirmPassword.classList.remove("error");
        }

        if (!monthSelect.value || !daySelect.value || !yearSelect.value) {
            dobError.textContent = "Campo obrigatório.";
            valid = false;
        } else {
            dobError.textContent = "";
        }

        if (!agree.checked) {
            termsError.textContent = "Você deve concordar com os termos.";
            valid = false;
        } else {
            termsError.textContent = "";
        }

        submitBtn.disabled = !valid;
    }

    document.querySelector(".close").addEventListener("click", function () {
        window.location.href = "login.html";
    });

    monthSelect.addEventListener("change", updateDays);
    yearSelect.addEventListener("change", updateDays);
    password.addEventListener("input", validateForm);
    confirmPassword.addEventListener("input", validateForm);
    agree.addEventListener("change", validateForm);
    nameInput.addEventListener("input", validateForm);
    emailInput.addEventListener("input", validateForm);
    daySelect.addEventListener("change", validateForm);
    monthSelect.addEventListener("change", validateForm);
    yearSelect.addEventListener("change", validateForm);
    
    populateYears();
});
