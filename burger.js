const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".navMenu");

// toggle burger menu when click on burger icon
burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

// toggle burger menu back when click on any navLink
document.querySelectorAll(".navLink").forEach(n =>
    n.addEventListener("click", () => {
        burger.classList.remove("active");
        navMenu.classList.remove("active");
    }
    )
)