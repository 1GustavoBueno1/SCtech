function verficarNota() {
    let nota = document.getElementById("nota").value;
    if (nota >= 7) {
        document.getElementById("Resultado").innerHTML = "Aluno(a) Aprovado!";
        alert("Aluno(a) Aprovado!")
    } else {
        document.getElementById("Resultado").innerHTML = "Aluno(a) Reprovado!";
        alert("Aluno(a) Reprovado!")
    };
};