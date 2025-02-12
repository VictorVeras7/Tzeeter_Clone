const daySelect = document.getElementById("day");
const yearSelect = document.getElementById("year");
const monthSelect = document.getElementById("month");
const submitBtn = document.getElementById("submitBtn");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const agree = document.getElementById("agree");

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
    submitBtn.disabled = !(password.value.length >= 6 && 
                           password.value === confirmPassword.value &&
                           agree.checked);
}

monthSelect.addEventListener("change", updateDays);
yearSelect.addEventListener("change", updateDays);
password.addEventListener("input", validateForm);
confirmPassword.addEventListener("input", validateForm);
agree.addEventListener("change", validateForm);

populateYears();