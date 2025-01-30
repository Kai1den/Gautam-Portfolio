document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("nav ul");
    const toggleBtn = document.createElement("div");
    toggleBtn.innerHTML = "&#9776;";
    toggleBtn.classList.add("toggle-menu");

    document.querySelector("header").prepend(toggleBtn);

    toggleBtn.addEventListener("click", function () {
        nav.classList.toggle("show");
    });
});
