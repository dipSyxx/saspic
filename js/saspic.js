// burger-menu()()()()----------

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('lock');
        iconMenu.classList.toggle('left');
        menuBody.classList.toggle('left');
    });
}


// burger-menu()()()()----------



//(SCROLL-HEADER--------------------------------)

let didScroll = false;
const header = $('#header');

// Detect scroll event
$(window).on('scroll', function () {
    didScroll = true;
});

// Used for throttling to improve performance
setInterval(function () {
    if (didScroll) {
        didScroll = false;

        if ($(window).scrollTop() > 0) {
            header.addClass('scrolled');
        } else {
            header.removeClass('scrolled');
        }
    }
});

//(SCROLL-HEADER--------------------------------)



// smooth scroll
const menuLinks = document.querySelectorAll('.menu__link[data-scroll]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.scroll && document.querySelector(menuLink.dataset.scroll)) {
            const scrollBlock = document.querySelector(menuLink.dataset.scroll);
            const scrollBlockValue = scrollBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            if (iconMenu.classList.contains('left')) {
                document.body.classList.remove('lock');
                iconMenu.classList.remove('left');
                menuBody.classList.remove('left');
            }

            window.scrollTo({
                top: scrollBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}
// smooth scroll




//(Scrolling Animation with Vanilla JavaScript--)

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 4;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("animation");
        } else {

        }
    }
}

reveal();

window.addEventListener("scroll", reveal);

//(Scrolling Animation with Vanilla JavaScript--)




// (Slick-Slider--------------------------------)
$(document).ready(function () {

    $('.slider').slick({

        arrows: true,
        speed: 1100,
        autoplay: true,
        autoplaySpeed: 2000,

    });
});

// (Slick-Slider--------------------------------)