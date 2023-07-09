import * as Turbo from "@hotwired/turbo";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

AOS.init();

document.addEventListener("turbo:load", () => {
    // Get the current scroll position of the page
    const currentScrollPosition = window.pageYOffset;

    // Store the current scroll position in local storage
    localStorage.setItem("scrollPosition", currentScrollPosition);

    // Retrieve the stored scroll position on page load
    window.onload = () => {
        const storedScrollPosition = localStorage.getItem("scrollPosition");
        if (storedScrollPosition) {
            window.scrollTo(0, storedScrollPosition);
            localStorage.removeItem("scrollPosition");
        }
    };


     // Sticky Header
    let header = document.querySelector(".header");

    if (header) {
        // Add an event listener to the window for when it is scrolled
        window.addEventListener('scroll', function() {
            // Check if the page has been scrolled more than 20 pixels
            if (window.scrollY > 20) {
                // Add the "sticky" class to the header
                header.classList.add("sticky");
            } else {
                // Remove the "sticky" class from the header
                header.classList.remove("sticky");
            }
        });
    }
});