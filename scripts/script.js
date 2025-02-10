const textarea = document.querySelector("textarea");
const counter = document.querySelector(".counter");
const sendBtn = document.querySelector(".send-btn");
const maxLength = 140;

textarea.addEventListener("input", () => {
    const length = textarea.value.length;
    counter.textContent = `${length}/140`;
    counter.className = "counter";
    
    if (length >= 100 && length < 140) {
        counter.classList.add("warning");
    } else if (length >= 140) {
        counter.classList.add("error");
    }
    
    sendBtn.disabled = length === 0 || length > 140;
});