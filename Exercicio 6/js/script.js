function calcularMes(mes) {
    const dado = mes;
    let resultado;

    switch (dado) {
        case 1:
            resultado = "Janeiro"
            break;
        case 2:
            resultado = "Fevereiro"
            break;
        case 3:
            resultado = "Março"
            break;
        case 4:
            resultado = "Abril"
            break;
        case 5:
            resultado = "Maio"
            break;
        case 6:
            resultado = "Junho"
            break;
        case 7:
            resultado = "Julho"
            break;
        case 8:
            resultado = "Agosto"
            break;
        case 9:
            resultado = "Setembro"
            break;
        case 10:
            resultado = "Outubro"
            break;
        case 11:
            resultado = "Novembro"
            break;
        case 12:
            resultado = "Dezembro"
            break;
        default:
            resultado = "Número inválido, informe um número entre 1 e 12"
    }

    document.getElementById("resultadoMes").innerHTML = resultado;
}

function calcularConceito(conceito) {
    const dado = conceito.toUpperCase();
    let resultado;

    switch (dado) {
        case "A":
            resultado = "Atendido"
            break;
        case "PA":
            resultado = "Parcialmente Atendido"
            break;
        case "NA":
            resultado = "Não atendido"
            break;
        default:
            resultado = "Conceito inválido, informe A, PA ou NA"
    }

    document.getElementById("resultadoConceito").innerHTML = resultado;
}