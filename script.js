/* ==================================================
   ELEMENTS
================================================== */

const navbar = document.getElementById("navbar");
const navLinks = document.getElementById("navLinks");
const menuToggle = document.getElementById("menuToggle");

const navItems = document.querySelectorAll(".nav-item");
const sections = document.querySelectorAll(".section");


/* ==================================================
   MOBILE MENU
================================================== */

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("open");

});


/* Close menu after clicking a navigation item */

navItems.forEach((item) => {

    item.addEventListener("click", () => {

        navLinks.classList.remove("open");

    });

});


/* ==================================================
   NAVBAR SCROLL EFFECT
================================================== */

function updateNavbar() {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

}

window.addEventListener("scroll", updateNavbar);


/* ==================================================
   ACTIVE NAVIGATION ON SCROLL
================================================== */

const observerOptions = {

    root: null,

    rootMargin: "-35% 0px -55% 0px",

    threshold: 0

};


const sectionObserver =
    new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) {
                return;
            }

            const currentId = entry.target.id;

            navItems.forEach((item) => {

                item.classList.remove("active");

                if (
                    item.getAttribute("href") ===
                    `#${currentId}`
                ) {

                    item.classList.add("active");

                }

            });

        });

    }, observerOptions);


sections.forEach((section) => {

    sectionObserver.observe(section);

});


/* ==================================================
   SMOOTH SCROLL
================================================== */

navItems.forEach((item) => {

    item.addEventListener("click", (event) => {

        event.preventDefault();

        const targetId =
            item.getAttribute("href");

        const target =
            document.querySelector(targetId);

        if (!target) return;

        const navbarHeight =
            navbar.offsetHeight;

        const targetPosition =
            target.offsetTop - navbarHeight;

        window.scrollTo({

            top: targetPosition,

            behavior: "smooth"

        });

    });

});


/* ==================================================
   HOVER EFFECT
================================================== */

navItems.forEach((item) => {

    item.addEventListener("mouseenter", () => {

        item.style.setProperty(
            "--hover-color",
            "#2dd4bf"
        );

    });

});


/* ==================================================
   CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
================================================== */

document.addEventListener("click", (event) => {

    const clickedInsideNavbar =
        navbar.contains(event.target);

    if (!clickedInsideNavbar) {

        navLinks.classList.remove("open");

    }

});


/* ==================================================
   INITIALIZE
================================================== */

updateNavbar();