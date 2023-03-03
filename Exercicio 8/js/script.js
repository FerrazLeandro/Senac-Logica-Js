function calcularNumerosAleatorios() {
    let resultado = [];

    for (let index = 0; index < 10; index++) {
        resultado.push(Math.floor(Math.random() * 1000));
    }


    document.getElementById("resultadoNumerosAleatorios").innerHTML = resultado;
}

function calcularNumerosAleatoriosAlterado() {
    let resultado = [];

    for (let index = 0; index < 5; index++) {
        resultado.push(Math.floor(Math.random() * 100));
    }

    document.getElementById("resultadoNumerosAleatoriosAlterado").innerHTML = resultado;

    document.getElementById("NumeroASerAlterado").innerHTML = '<br><label for="numeroAlterado">Qual número deseja alterar: </label><input type="number" id="numeroAlterado" name="numeroAlterado" placeholder="Informe um número"><br><label for="numeroAlterado">Qual número deseja inserir: </label><input type="number" id="numeroInserir" name="numeroInserir" placeholder="Informe um número"><br><input type="button" class="botao" onclick="calcularNumerosAleatoriosAlteradoUsuario()" value="Alterar">'
}

function calcularNumerosAleatoriosAlteradoUsuario() {
    var resultado = JSON.parse("[" + document.getElementById("resultadoNumerosAleatoriosAlterado").innerHTML + "]");
    const index = resultado.indexOf(Number(document.getElementById("numeroAlterado").value));
    const numero = Number(document.getElementById("numeroInserir").value)

    if (index !== -1) {
        resultado[index] = numero;
    }

    document.getElementById("resultadoNumerosAleatoriosAlteradoUsuario").innerHTML = resultado

}

function calcularArrayEstados() {
    const estados = [
        document.getElementById("estado1").value,
        document.getElementById("estado2").value,
        document.getElementById("estado3").value,
        document.getElementById("estado4").value,
        document.getElementById("estado5").value,
    ];
    let resultado = []

    for (let index = 0; index < estados.length; index++) {
        if (index == 0 || index == 2 || index == 4)
            resultado.push(estados[index]);
    }

    document.getElementById("resultadoEstados").innerHTML = resultado;
}

function calcularSomaDezNumeros() {
    const numeros = [
        Number(document.getElementById("somanumero1").value),
        Number(document.getElementById("somanumero2").value),
        Number(document.getElementById("somanumero3").value),
        Number(document.getElementById("somanumero4").value),
        Number(document.getElementById("somanumero5").value),
        Number(document.getElementById("somanumero6").value),
        Number(document.getElementById("somanumero7").value),
        Number(document.getElementById("somanumero8").value),
        Number(document.getElementById("somanumero9").value),
        Number(document.getElementById("somanumero10").value),
    ]
    let soma = 0;
    let media = 0;

    for (let index = 0; index < numeros.length; index++) {
        soma += numeros[index];
    }

    media = soma / numeros.length;

    document.getElementById("resultadoSomaDezNumeros").innerHTML = media;

}

function calcularMaiorNumero() {
    const numeros = [
        Number(document.getElementById("maiornumero1").value),
        Number(document.getElementById("maiornumero2").value),
        Number(document.getElementById("maiornumero3").value),
        Number(document.getElementById("maiornumero4").value),
        Number(document.getElementById("maiornumero5").value),
        Number(document.getElementById("maiornumero6").value),
        Number(document.getElementById("maiornumero7").value),
        Number(document.getElementById("maiornumero8").value),
    ]

    maior = Math.max(...numeros);
    menor = Math.min(...numeros);

    document.getElementById("resultadoMaiorNumero").innerHTML = "O maior número é " + maior + ", e o menor é " + menor;
}


function calcularMaiorQueDez() {
    const numeros = [
        Number(document.getElementById("numeroMaiorQueDez1").value),
        Number(document.getElementById("numeroMaiorQueDez2").value),
        Number(document.getElementById("numeroMaiorQueDez3").value),
        Number(document.getElementById("numeroMaiorQueDez4").value),
        Number(document.getElementById("numeroMaiorQueDez5").value),
        Number(document.getElementById("numeroMaiorQueDez6").value),
        Number(document.getElementById("numeroMaiorQueDez7").value),
        Number(document.getElementById("numeroMaiorQueDez8").value),
        Number(document.getElementById("numeroMaiorQueDez9").value),
        Number(document.getElementById("numeroMaiorQueDez10").value),
    ]

    resultado = 0;

    for (let index = 0; index < numeros.length; index++) {
        if (numeros[index] > 10)
            resultado++
    }

    document.getElementById("resultadoMaiorQueDez").innerHTML = resultado;
}

function calcularParOuImpar() {
    const numeros = [
        Number(document.getElementById("numeroParOuImpar1").value),
        Number(document.getElementById("numeroParOuImpar2").value),
        Number(document.getElementById("numeroParOuImpar3").value),
        Number(document.getElementById("numeroParOuImpar4").value),
        Number(document.getElementById("numeroParOuImpar5").value),
        Number(document.getElementById("numeroParOuImpar6").value),
        Number(document.getElementById("numeroParOuImpar7").value)
    ]

    pares = 0;
    impares = 0;

    for (let index = 0; index < numeros.length; index++) {
        if (numeros[index] % 2 == 0)
            pares++
        else
            impares++
    }

    document.getElementById("resultadoParOuImpar").innerHTML = "Total de pares: " + pares + ", total de ímpares " + impares;
}