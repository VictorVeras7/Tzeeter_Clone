document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".tzeet-box").forEach(tzeetBox => {
        const textarea = tzeetBox.querySelector("textarea");
        const counter = tzeetBox.closest(".modal-content, main").querySelector(".counter");
        const sendBtn = tzeetBox.closest(".modal-content, main").querySelector(".send-btn");
        const maxLength = 140;

        counter.textContent = "0/140";
        counter.style.display = "inline";

        textarea.addEventListener("input", () => {
            const length = textarea.value.length;
            counter.textContent = `${length}/${maxLength}`;
            
            counter.style.color = length >= maxLength ? "rgb(255, 0, 0)" : length >= 100 ? "rgb(255, 200, 0)" : "black";
            
            sendBtn.disabled = length === 0 || length > maxLength;
        });
    });
});
