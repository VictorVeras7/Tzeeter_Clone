document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("tzeetDialog");
    const modalTextarea = modal?.querySelector("textarea");
    const modalCounter = modal?.querySelector(".counter");
    const modalSendBtn = modal?.querySelector(".send-btn");
    const openModalBtn = document.getElementById("openModal");
    const closeModalBtn = modal?.querySelector(".close");

    const homeTextarea = document.getElementById("tzeet-textarea");
    const homeCounter = document.querySelector(".counter");
    const homeSendBtn = document.querySelector(".send-btn");

    const maxLength = 140;

    function updateCounter(textarea, counter, sendBtn) {
        if (!textarea || !counter || !sendBtn) return; 
        
        textarea.addEventListener("input", () => {
            const length = textarea.value.length;
            counter.textContent = `${length}/140`;

            if (length > 100 && length <= 140) {
                counter.classList.add("warning");
                counter.classList.remove("error");
            } else if (length > 140) {
                counter.classList.add("error");
                counter.classList.remove("warning");
            } else {
                counter.classList.remove("warning", "error");
            }

            sendBtn.disabled = length === 0 || length > 140;
        });
    }

    updateCounter(homeTextarea, homeCounter, homeSendBtn);

    if (modal) {
        updateCounter(modalTextarea, modalCounter, modalSendBtn);

        openModalBtn?.addEventListener("click", () => {
            modal.showModal();
        });

        closeModalBtn?.addEventListener("click", () => {
            modal.close();
            modalTextarea.value = "";
            modalCounter.textContent = "0/140";
            modalSendBtn.disabled = true;
        });
    }
});

