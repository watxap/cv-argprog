var iconosClass = [
    "fa-solid fa-thumbs-up fa-5x",
    "fa-solid fa-check fa-5x",
    "fa-solid fa-comment fa-5x",
    "fa-solid fa-question fa-5x",
    "fa-solid fa-hand-point-up fa-5x",
    "fa-solid fa-hand-peace fa-5x"
]

function iconoAvatar() {
    var iconoRandom = Math.floor(Math.random() * iconosClass.length)
    iconoAlAzar.setAttribute("class", `${iconosClass[iconoRandom]}`)
}

document.getElementById('foto').onclick = function () {
    iconoAvatar();
    }


function mostrarIdiomas() {
    var x = document.getElementById("divIdiomas");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function mostrarCodigo() {
    var x = document.getElementById("divCodigo");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
