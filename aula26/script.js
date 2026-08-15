function enviar() {
    const pizza = Number(document.getElementById("pizza").value);
    let resultado = ""

    if (pizza > 4 || pizza < 1) {
        resultado =  "Erro, numero invalido"
    }

    switch (pizza){
        case 1 :
            resultado = "pizza de calabresa"
            break
        case 2 :
            resultado = "pizza de 4 queijos"
            break
        case 3 :
            resultado = "pizza de frango"
            break
        case 4 :
            resultado = "pizza de brigadeiro"
            break
    }
    document.getElementById("resultado").innerHTML =  resultado
}