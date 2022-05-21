const navbar = document.querySelector(".header_right");
const button = document.querySelector(".menu_mobile");

button.addEventListener("click", () => {
    navbar.classList.toggle("active");
})

function mudarTema() {
    let main = document.querySelector("main");
    if (main.classList.contains("main1")) {
        main.classList.remove("main1");
        main.classList.add("main2");
    } else {
        main.classList.remove("main2");
        main.classList.add("main1");
    }
}