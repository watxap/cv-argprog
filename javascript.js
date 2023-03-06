console.log("Cargada la página para js")

document.getElementById('foto').onclick = function () {
console.log("Capturado el evento click a partir del click en foto");
}

function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}