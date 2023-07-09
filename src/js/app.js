import * as Turbo from "@hotwired/turbo";

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

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

    // init Swiper:
    new Swiper('.swiper-tech-stack', {
        slidesPerView: 8,
        spaceBetween: 10,
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 3,
                spaceBetween: 10
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 8,
                spaceBetween: 10
            }
        },
        centeredSlides: true,
        centeredSlidesBounds: true,
        loop: true,
        autoplay: {
            delay: 5000,
        },
        grabCursor: true,
    });
});