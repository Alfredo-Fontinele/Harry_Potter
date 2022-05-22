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
        btn_music.innerHTML = "Desativar Musica";
    } else {
        count = 0;
        audio.pause();
        btn_music.innerHTML = "Ativar Musica";
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
    let main = document.querySelector("main");
    if (main.classList.contains("main1")) {
        main.classList.remove("main1");
        main.classList.add("main2");
    } else {
        main.classList.remove("main2");
        main.classList.add("main1");
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