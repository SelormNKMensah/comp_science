// scroll function for the navbar
window.addEventListener("scroll", function () {
    let nb = document.querySelector("nav");
    nb.classList.toggle("sticky", window.scrollY = 0);
});


// parallax function
const parallax = document.getElementById("parallax");

window.addEventListener("scroll", function () {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.3 + "px";
});
