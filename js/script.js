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