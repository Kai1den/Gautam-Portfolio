document.addEventListener("DOMContentLoaded", function() {
    let sections = document.querySelectorAll("section");
    let options = {
        threshold: 0.2
    };
    let observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, options);
    sections.forEach(section => {
        observer.observe(section);
    });
});
