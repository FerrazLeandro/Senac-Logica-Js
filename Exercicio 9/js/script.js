function matrizQuatroTres() {
    var matriz =
        [
            [1, 11, 111, 1111],
            [2, 22, 222, 2222],
            [3, 33, 333, 3333]
        ]

    for (let lin = 0; lin < matriz.length; lin++) {
        for (let col = 0; col < 4; col++)
            document.getElementById("resultadoMatrizQuatroTres").innerHTML += matriz[lin][col] + "  ";
    }
}

function matrizLinha() {
    const linha = Number(document.getElementById("matrizLinha").value) - 1;
    var matriz =
        [
            [1, 11, 111],
            [2, 22, 222],
            [3, 33, 333]
        ]

    document.getElementById("resultadoMatrizLinha").innerHTML = matriz[linha] + "  ";
}

function somaMatriz() {
    const linha1 = document.getElementById("matrizLinha1").value;
    const linha2 = document.getElementById("matrizLinha2").value;
    const linha3 = document.getElementById("matrizLinha3").value;
    const linha4 = document.getElementById("matrizLinha4").value;

    let matriz = [
        linha1.split(' '),
        linha2.split(' '),
        linha3.split(' '),
        linha4.split(' '),
    ]

    let coluna0 = 0;
    let coluna1 = 0;
    let coluna2 = 0;
    let coluna3 = 0;

    for (let lin = 0; lin < matriz.length; lin++) {
        let linha = 0;

        for (let col = 0; col < 4; col++) {
            linha += Number(matriz[lin][col])
        }

        coluna0 += Number(matriz[lin][0])
        coluna1 += Number(matriz[lin][1])
        coluna2 += Number(matriz[lin][2])
        coluna3 += Number(matriz[lin][3])

        document.getElementById("resultadoSomaMatriz").innerHTML += "Linha  " + lin + " : " + linha + '<br>';
    }

    document.getElementById("resultadoSomaMatriz").innerHTML += "Coluna 0  " + " : " + coluna0 + '<br>';
    document.getElementById("resultadoSomaMatriz").innerHTML += "Coluna 1  " + " : " + coluna1 + '<br>';
    document.getElementById("resultadoSomaMatriz").innerHTML += "Coluna 2  " + " : " + coluna2 + '<br>';
    document.getElementById("resultadoSomaMatriz").innerHTML += "Coluna 3  " + " : " + coluna3 + '<br>';
}

function somaMatrizDois() {
    let resultado1 = 0;
    let resultado2 = 0;
    let resultado = 0;

    const matriz1 = [
        [1, 2],
        [3, 4]
    ]

    const matriz2 = [
        [5, 6],
        [7, 8]
    ]

    document.getElementById("matriz1").innerHTML = "Matriz 1:" + matriz1;
    document.getElementById("matriz2").innerHTML = "Matriz 2:" + matriz2;

    for (let lin = 0; lin < matriz1.length; lin++) {
        for (let col = 0; col < 2; col++) {
            resultado1 += Number(matriz1[lin][col])
        }
    }

    for (let lin = 0; lin < matriz2.length; lin++) {
        for (let col = 0; col < 2; col++) {
            resultado2 += Number(matriz2[lin][col])
        }
    }

    if (resultado1 > resultado2)
        resultado = matriz1 + " e a soma é " + resultado1
    else 
        resultado = matriz2 + " e a soma é " + resultado2

    document.getElementById("resultadoSomaMatrizDois").innerHTML = "A maior matriz é: " + resultado;

}


function imprimirValores() {
    const linha1 = document.getElementById("matrizQuadrada1").value;
    const linha2 = document.getElementById("matrizQuadrada2").value;
    const linha3 = document.getElementById("matrizQuadrada3").value;
    const linha4 = document.getElementById("matrizQuadrada4").value;

    let matriz = [
        linha1.split(' '),
        linha2.split(' '),
        linha3.split(' '),
        linha4.split(' '),
    ]

    document.getElementById("resultadoMatrizQuadrada").innerHTML += "Valores  " + matriz + '<br>';
}

function imprimirValores() {
    const linha1 = document.getElementById("matrizQuadrada1").value;
    const linha2 = document.getElementById("matrizQuadrada2").value;
    const linha3 = document.getElementById("matrizQuadrada3").value;
    const linha4 = document.getElementById("matrizQuadrada4").value;

    let matriz = [
        linha1.split(' '),
        linha2.split(' '),
        linha3.split(' '),
        linha4.split(' '),
    ]

    document.getElementById("resultadoMatrizQuadrada").innerHTML += "Valores  " + matriz + '<br>';
}

