const celulas = document.querySelectorAll('.celula')


document.getElementById('reniciar').addEventListener('click', iniciarJogo)
let vezDoX = true;

function iniciarJogo() {
    celulas.forEach(celula =>{
        celula.textContent = "";
        celula.addEventListener('click', tratarClique, {once:true})
    })
}

function tratarClique(evento) {
    evento.target.textContent = vezDoX ? "X" : "0";
    vezDoX = !vezDoX
}

iniciarJogo()