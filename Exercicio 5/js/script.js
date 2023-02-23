function calcularPlano() {
    const salario = Number(document.getElementById("salario").value);
    let resultado;

    if (salario > 3000)
        resultado = "Oferecer Plano Alfa"
    else {
        resultado = "Oferecer Plano Beta";
    }

    document.getElementById("resultadoPlano").innerHTML = resultado;
}

function calcularColesterol() {
    const colesterol = Number(document.getElementById("colesterol").value);
    let resultado;

    if (colesterol < 180)
        resultado = "Saúde Ok"
    else {
        resultado = "Vamos procurar uma ajuda médica?";
    }

    document.getElementById("resultadoColesterol").innerHTML = resultado;
}

function calcularComissao() {
    const totalVenda = Number(document.getElementById("totalVenda").value);
    let resultado;

    if (totalVenda >= 100000)
        resultado = totalVenda * 0.04
    else {
        resultado = totalVenda * 0.02
    }

    document.getElementById("resultadoComissao").innerHTML = resultado;
}

function calcularNota() {
    const nota = Number(document.getElementById("nota").value);
    let resultado;

    if (nota < 0 || nota > 10)
        resultado = "Nota inválida"
    else if (nota >= 0 && nota < 4)
        resultado = "Aluno reprovado!"
    else if (nota >= 4 && nota < 7) {
        resultado = "Aluno em recuperação!"
        var div = document.querySelector("#divrecuperacao");
        div.style.display = "block";
    } else
        resultado = "Aluno aprovado!"

    document.getElementById("resultadoNota").innerHTML = resultado;
}

function recuperarNota() {
    const nota = Number(document.getElementById("nota").value);
    const notaRecuperacao = Number(document.getElementById("recuperacaoNota").value);
    let resultado = nota + notaRecuperacao;

    if (resultado > 5)
        document.getElementById("resultadoRecuperacao").innerHTML = "Aprovado na recuperação";
    else
        document.getElementById("resultadoRecuperacao").innerHTML = "Reprovado na recuperação";


}
