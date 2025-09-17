document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger-icon");
    const hamMenu = document.querySelector(".ham-menu");
    const closeBtn = document.querySelector(".close-menu");

    if (hamburger && hamMenu && closeBtn) {
    hamburger.addEventListener("click", () => {
        hamMenu.classList.add("active");
    });

    closeBtn.addEventListener("click", (e) => {
        e.preventDefault();
        hamMenu.classList.remove("active");
    });
    } else {
    console.error("One or more elements not found:", {
        hamburger,
        hamMenu,
        closeBtn
    });
    }
});