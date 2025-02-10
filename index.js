document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    // Smooth Scrolling
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });

    // Active Link Highlighting on Scroll
    function updateActiveLink() {
        let scrollPosition = window.scrollY;

        sections.forEach(section => {
            let sectionTop = section.offsetTop - 80;
            let sectionHeight = section.clientHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove("active"));
                document.querySelector(`nav ul li a[href="#${section.id}"]`).classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", updateActiveLink);
    updateActiveLink(); // Run on page load

    // Contact Form Handling
    document.querySelector("#contact form").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Thank you for your message! I will get back to you soon.");
        this.reset(); // Clears form fields after submission
    });
});
