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
