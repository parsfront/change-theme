const switchElement = document.querySelector(".switch");
switchElement.addEventListener("click", function () {
    //Adding dark class
    document.body.classList.toggle("dark");

    //Boolean
    if (document.body.classList.includes("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

window.onload = function () {
    let localStorageTheme = localStorage.getItem("theme");
    if (localStorageTheme === "dark") {
        document.body.classList.toggle("dark");
    }
};
