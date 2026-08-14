const carros = ["uno", "ferrari", "fusca", "palio"]

const conteudo = document.getElementById("conteudo")

let dados = ""
let i = 0


while(i < 4) {


    dados += "<p>"+carros[i]+"</p>"
    i++
}
const secao = document.createElement("div")
secao.innerHTML = dados
conteudo.appendChild(secao)