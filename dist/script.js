const cards = document.querySelectorAll('.cards'); // Select all cards

cards.forEach((card) => {
    const image = card.querySelector('.card'); // Select the specific image in this card
    card.addEventListener('mouseover', () => {
        image.classList.add('card_animate'); // Add animation class
    });
    card.addEventListener('mouseout', () => {
        image.classList.remove('card_animate'); // Remove animation class
    });
});


// Nav Bar Toggle
const navMenu = document.getElementById('nav-menu');
const navLink = document.querySelectorAll('.nav-link');
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]")
    hamburger.classList.toggle("ri-close-large-line")
})

navLink.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.toggle("left-[0]")
        hamburger.classList.toggle("ri-close-large-line")
    })
})

// Scroll Animation JS
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 300,
    reset: true
})

sr.reveal('.home_data, .about_top, .popular_top, .review_top, .review_swiper, .footer_sec, .footer_content, .copy_right')
sr.reveal('.home_img', { delay: 100, scale: 0.5 })

sr.reveal('.service_card, .popular_card, .footer_plant, .footer_link ', { interval: 300 })

sr.reveal('.about_content_1, .about_img_2', { origin: "right" })
sr.reveal('.about_content_2, .about_img_1', { origin: "left" })

sr.reveal('.review_img', { delay: 100, origin: "right" })

// Swiper's JS
const swiper = new Swiper('.swiper', {
    // Optional parameters
    speed: 400,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    grabCursor: true,
    breakpoints: {
        640: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
});