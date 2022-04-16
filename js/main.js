let burgerBtn = document.querySelector('.navbar__burger');
let burgerMenu = document.querySelector('.burger__menu');
let body = document.querySelector('body');

burgerBtn.addEventListener('click', function () {
    this.classList.toggle('active');
    burgerMenu.classList.toggle('active');
    body.classList.toggle('lock');
});

//TODO: Swiper
var swiper = new Swiper('.mySwiper', {
    // direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // autoplay: {
    //   // delay: 2000,
    //   disableOnInteraction: false,
    //   pauseOnMouseEnter: true,
    // },
});

let backToTop = document.querySelector('#backToTop');
let pageTop = document.querySelector('header');

window.addEventListener('scroll', function (e) {
    if (window.pageYOffset > 1600) {
        this.document.querySelector('.back__to--top').classList.add('show');
    } else {
        this.document.querySelector('.back__to--top').classList.remove('show');
    }
});

backToTop.addEventListener('click', function () {
    pageTop.scrollIntoView({behavior: 'smooth'});
});

let animated = sessionStorage.getItem("animated");

if (animated === "active") {
    document.querySelector('.loader').classList.add('d-none');
}else {
    setTimeout(function () {
        document.querySelector('.loader').classList.add('hide');
    }, 5000);
}

let i = 0;
let txt = 'cyber animals';
let speed = 200;

(function typeWriter() {
    if (i < txt.length) {
        document.getElementById('loaderText').innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
})();

///TODO: Session storage
function animateActive() {
    sessionStorage.setItem("animated", "active")
}