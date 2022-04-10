const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

function jump() {
    if(dino.classList != "jump") {
        dino.classList.add("jump");

        setTimeout(function () {
            dino.classList.remove("jump");
        }, 300);
}};

let isAlive = setInterval(function () {

        // pegar posição atual do dino no Y
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    
        // pegar posição atual do cactus no Y//
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    console.log(cactusLeft)

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        alert("Você bateu no cacto.\nVocê será redirecionado para a página inicial.");
        cactusLeft = 0;
        mudarPagina()
    }


}, 10)

document.addEventListener("keydown", function (event) {
    jump();
});

function mudarPagina(){
    window.location.href = "https://vviccenzo.github.io/bootcamp-profile-euax/";
}
