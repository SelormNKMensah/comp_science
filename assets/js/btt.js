// scroll to top function
const scrollTop = function () {
    const scrollBtn = document.createElement("button");
    scrollBtn.innerHTML = "&uarr;";
    scrollBtn.setAttribute("id", "scroll-btn");
    document.body.appendChild(scrollBtn);
    const scrollBtnDisplay = function () {
        window.scrollY > window.innerHeight
            ? scrollBtn.classList.add("show")
            : scrollBtn.classList.remove("show");
    }
    window.addEventListener("scroll", scrollBtnDisplay);
    const scrollWindow = function () {
        if (window.scrollY != 0) {
            setTimeout(function () {
                window.scrollTo(0, window.scrollY - 150);
                scrollWindow();
            }, 10)
        }
    }

    scrollBtn.addEventListener("click", scrollWindow)
}

scrollTop();
