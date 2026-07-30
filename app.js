/*
==========================================================

FELLFIELD
Technology & Strategic Advisory

Main JavaScript

==========================================================
*/

document.addEventListener("DOMContentLoaded", () => {

    /* ======================================================
       NAVBAR
    ====================================================== */

    const header = document.querySelector(".site-header");

    function updateNavbar() {

        if (window.scrollY > 40) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    }

    updateNavbar();

    window.addEventListener("scroll", updateNavbar);



    /* ======================================================
       SCROLL REVEAL
    ====================================================== */

    const reveals = document.querySelectorAll(
        ".section, .expertise article"
    );

    const observer = new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.15,
            rootMargin: "0px 0px -60px 0px"
        }

    );

    reveals.forEach((element) => {

        element.classList.add("reveal");

        observer.observe(element);

    });



    /* ======================================================
       SMOOTH SCROLL
    ====================================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const id = this.getAttribute("href");

            if (id === "#") return;

            const target = document.querySelector(id);

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",
                block: "start"

            });

        });

    });



    /* ======================================================
       ACTIVE NAV LINK
    ====================================================== */

    const sections = document.querySelectorAll("section[id]");

    const navLinks = document.querySelectorAll(".nav-links a");

    function activateNavigation() {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 120;
            const height = section.offsetHeight;

            if (
                window.scrollY >= top &&
                window.scrollY < top + height
            ) {
                current = section.getAttribute("id");
            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    }

    activateNavigation();

    window.addEventListener("scroll", activateNavigation);



    /* ======================================================
       CONTACT BUTTON ANALYTICS HOOK
    ====================================================== */

    document.querySelectorAll('a[href^="mailto:"]').forEach(button => {

        button.addEventListener("click", () => {

            // Future analytics integration
            // Example:
            // gtag('event','contact_click');

            console.log("Contact button clicked");

        });

    });

});
