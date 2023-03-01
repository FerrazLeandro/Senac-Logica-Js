function calcularMaiorNumero() {
    const numero1 = Number(document.getElementById("numero1").value);
    const numero2 = Number(document.getElementById("numero2").value);
    const numero3 = Number(document.getElementById("numero3").value);
    let resultado;

    if (numero1 > numero2)
        resultado = numero1
    else if (numero2 > numero3)
        resultado = numero2
    else
        resultado = numero3

    document.getElementById("resultadoMaiorNumero").innerHTML = resultado;
}

function calcularParOuImpar() {
    const numero = Number(document.getElementById("numero").value);
    let resultado;
    if (numero % 2 == 0)
    resultado = "par"
    else {
        resultado = "ímpar"
    }

    document.getElementById("resultadoParOuImpar").innerHTML = "O número " + numero + " é " + resultado;
}


function calcularArrayDoisNumeros() {
    const numero1 = document.getElementById("arrayDoisNumeros1").value;
    const numero2 = document.getElementById("arrayDoisNumeros2").value;
    let resultado = [numero1, numero2]

    document.getElementById("resultadoArrayDoisNumeros").innerHTML = "Resultado do array " + resultado ;
}

function calcularArrayTresNumerosCrescente() {
    const numero1 = Number(document.getElementById("arrayTresNumerosCrescente1").value);
    const numero2 = Number(document.getElementById("arrayTresNumerosCrescente2").value);
    const numero3 = Number(document.getElementById("arrayTresNumerosCrescente3").value);
    let resultado = [numero1, numero2, numero3];
    resultado = resultado.sort((numero1, numero2) => numero1 - numero2);

    document.getElementById("resultadoArrayTresNumerosCrescente").innerHTML = "Resultado do array " + resultado ;
}

function calcularArrayTresNumerosDecrescente() {
    const numero1 = Number(document.getElementById("arrayTresNumerosDecrescente1").value);
    const numero2 = Number(document.getElementById("arrayTresNumerosDecrescente2").value);
    const numero3 = Number(document.getElementById("arrayTresNumerosDecrescente3").value);
    let resultado = [numero1, numero2, numero3];
    resultado = resultado.sort((numero1, numero2) => numero2 - numero1);

    document.getElementById("resultadoArrayTresNumerosDecrescente").innerHTML = "Resultado do array " + resultado ;
}

function calcularArrayNumerosN() {
    const numero = Number(document.getElementById("arrayNumerosN").value);
    let resultado = [numero];

    for (let i = 0; i < numero; i++) {
        document.getElementById("resultadoArrayNumerosN").innerHTML += '<input type="text" id="arrayNumerosN' + i + '" placeholder="Informe um número">'
    }

    document.getElementById("resultadoArrayNumerosN").innerHTML += '<input type="button" class="botao" onclick="calcularArrayNumerosNUsuario()" value="Calcular">'
}

function calcularArrayNumerosNUsuario() {
    const numero = Number(document.getElementById("arrayNumerosN").value);
    let resultado = [];
    let resultadoalterado = [];

    for (let i = 0; i < numero; i++) {
        resultado.push(Number(document.getElementById("arrayNumerosN" + i).value));
        resultadoalterado.push(Number(document.getElementById("arrayNumerosN" + i).value));
    }

    resultado = resultado.sort((a, b)  => a - b);
    resultadoalterado = resultadoalterado.sort((a, b)  => b - a);

    document.getElementById("resultadoArrayNumerosN").innerHTML += '<br>' + "Resultado digitado: " + resultado +  '<br>';
    document.getElementById("resultadoArrayNumerosN").innerHTML += '<br>' + "Resultado alterado: " + resultadoalterado;

}