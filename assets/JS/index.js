// Funcionalidade do Botão do Áudio

let count = 0;
let btn_music = document.querySelector("button");
const audio = document.querySelector("audio");

function ativarAudio() {
    if (count == 0) {
        count = 1;
        audio.currentTime = 0.1;
        audio.autoplay = true;
        audio.loop = true;
        audio.play();
        btn_music.innerHTML = "Desativar Música";
        btn_music.style.backgroundColor = "slateblue";
    } else {
        count = 0;
        audio.pause();
        btn_music.innerHTML = "Ativar Música";
        btn_music.style.backgroundColor = "rgb(0, 125, 255)";
    }
}

// Funcionalidade do Menu Mobile

const navbar = document.querySelector(".header_right");
const button = document.querySelector(".menu_mobile");

button.addEventListener("click", () => {
    navbar.classList.toggle("active");
})

// Funcionalidade do Botão Mudar Tema de Fundo

function mudarTema() {

    let button = document.getElementById("mudarTema");
    let main = document.querySelector("main");
    let section2 = document.getElementById("section_second");
    let section3 = document.getElementById("section_third");

    if (main.classList.contains("main1")) {
        main.classList.remove("main1");
        main.classList.add("main2");
        section2.classList.remove("section_second");
        section2.classList.add("section_forth");
        section3.classList.remove("section_third");
        section3.classList.add("section_fifth");
        button.style.backgroundColor = "slateblue";

    } else if (main.classList.contains("main2")) {
        main.classList.remove("main2");
        main.classList.add("main1");
        section2.classList.remove("section_forth");
        section2.classList.add("section_second");
        section3.classList.remove("section_fifth");
        section3.classList.add("section_third");
        button.style.backgroundColor = "rgb(0, 125, 255)";
    }
}


// Testes de Audio

// let audio = document.querySelector("audio");

// async function ativaAudio() {
//     try {
//         audio.autoplay = true;
//         audio.loop = true;
//         await audio.play();
//     }
//     catch (error) {
//         console.log(error);
//     }
//     finally {
//         await audio.play();
//     }
// }

// window.onload = ativaAudio();
