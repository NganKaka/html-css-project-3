const btn = document.querySelector(".btn");

document.querySelectorAll(".navbar__link").forEach((element) => {
    element.addEventListener("mouseover", function () {
        element.classList.toggle("navbar__item--action");
    });
    element.addEventListener("mouseout", function () {
        element.classList.toggle("navbar__item--action");
    });
});

///##################### Change Smoothly #########################//
const nav = document.querySelector(".navbar");
const nav__links = document.querySelectorAll(".navbar__link");

nav__links.forEach((link) => {
    link.addEventListener("click", function (e) {
        const id = e.target.getAttribute("href");
        document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    });
});

///##################### FADE LINK #########################//
const header__top = document.querySelector(".header-top");
const handleHover = function (e) {
    if (
        e.target.classList.contains("navbar__link") ||
        e.target.classList.contains("action__link")
    ) {
        const link = e.target;
        const siblings = link
            .closest(".header-top")
            .querySelectorAll(".navbar__link,.action__link");
        const logo = link.closest(".header-top").querySelector(".logo");
        console.log(link, siblings, logo);
        siblings.forEach((el) => {
            if (el !== link) {
                el.style.opacity = this;
            }
        });
        logo.style.opacity = this;
    }
};
header__top.addEventListener("mouseover", handleHover.bind(0.5));

header__top.addEventListener("mouseout", handleHover.bind(1));

///##################### REVEAL SECTION  #########################//
const allSection = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("section--hidden");
    observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0,
    rootMargin: "-100px",
});
allSection.forEach((section) => {
    section.classList.add("section--hidden");
    sectionObserver.observe(section);
});

///##################### STICKY HEADER  #########################//
const navHeight = header__top.getBoundingClientRect().height;
const header = document.querySelector(".header");
const stickyNav = function (entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) {
        header__top.classList.add("sticky");
    } else {
        header__top.classList.remove("sticky");
    }
};

const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

///##################### SLIDEr  #########################//
const chevronLeft = document.querySelector(".chevron__left");
const chevronRight = document.querySelector(".chevron__right");
const slides = document.querySelectorAll(".member-list");
const dots = document.querySelectorAll(".dots__dot");
const totalSlides = slides.length;
let currentSlide = 0;

const goToSlide = function (slide) {
    slides.forEach((s, i) => {
        s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
};
const nextSlide = function () {
    if (currentSlide === totalSlides - 1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    goToSlide(currentSlide);
    activeDot(currentSlide);
};
const previousSlide = function () {
    if (currentSlide === 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide--;
    }
    goToSlide(currentSlide);
    activeDot(currentSlide);
};
const activeDot = function (slide) {
    document
        .querySelectorAll(".dots__dot")
        .forEach((dot) => dot.classList.remove("dots__dot--active"));
    document
        .querySelector(`.dots__dot[data-slide="${slide}"]`)
        .classList.add("dots__dot--active");
};
chevronRight.addEventListener("click", nextSlide);
chevronLeft.addEventListener("click", previousSlide);

dots.forEach((dot) => {
    dot.addEventListener("click", function (e) {
        const slide = parseInt(e.target.dataset.slide);

        goToSlide(slide);
        activeDot(slide);
    });
});

goToSlide(0);
activeDot(0);

///##################### TYPED  #########################//
var typed = new Typed("#typed", {
    strings: ["children", "babies", "women", "all ages."],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});
