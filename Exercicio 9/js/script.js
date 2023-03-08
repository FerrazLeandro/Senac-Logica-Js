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

    for (let lin = 0; lin < matriz.length; lin++) {
        let linha = 0;
        let coluna = 0;

        for (let col = 0; col < 4; col++) {
            linha += Number(matriz[lin][col])
        }
        console.log(lin)
        document.getElementById("resultadoSomaMatriz" + lin).innerHTML = "Linha  " + lin + " : " + linha;
    }

}

