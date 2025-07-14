// Mobile Navbar Toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// Smooth scroll for all nav links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetID = this.getAttribute('href').slice(1);
        const target = document.getElementById(targetID);
        const offset = document.querySelector('.navbar').offsetHeight;
        const position = target.offsetTop - offset;

        window.scrollTo({
            top: position,
            behavior: 'smooth'
        });

        navLinks.classList.remove("show"); // Close menu on click (mobile)
    });
});

// Back to Top button
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
