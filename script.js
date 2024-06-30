const btn = document.querySelector(".btn");

document.querySelectorAll(".navbar__link").forEach((element) => {
    element.addEventListener("mouseover", function () {
        element.classList.toggle("navbar__item--action");
    });
    element.addEventListener("mouseout", function () {
        element.classList.toggle("navbar__item--action");
    });
});

btn.addEventListener("mouseover", function () {
    btn.classList.toggle("transparent");
});
btn.addEventListener("mouseout", function () {
    btn.classList.toggle("transparent");
});
