function desconto() {
    let preco = document.getElementById("preco").value;
    let desconto = document.getElementById("desconto").value;
    if (preco < 0 || desconto < 0) {
        document.getElementById("Resultado").innerHTML = "Erro valores invalidos"
    } else {
        valor_desconto = preco * (desconto / 100)
        valor_final = preco - valor_desconto
        document.getElementById("Resultado").innerHTML = `Seu valor final e de ${valor_final}`
    }
}