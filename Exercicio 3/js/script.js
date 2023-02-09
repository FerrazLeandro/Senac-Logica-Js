function aumento100() {
    const x = Number(document.getElementById("aumento100").value);
    resultado = x * 2;
    document.getElementById("resultado_aumento100").innerHTML = 'Olá, 100% de ' + x + ' é ' + resultado;
}

function aumento50() {
    const x = Number(document.getElementById("aumento50").value);
    resultado = x * 1.5;
    document.getElementById("resultado_aumento50").innerHTML = 'Olá, 50% a mais de ' + x + ' é ' + resultado;
}

function retorno30() {
    const x = Number(document.getElementById("retorno30").value);
    resultado = x - x * 0.7;
    document.getElementById("resultado_retorno30").innerHTML = 'Olá, 30% de ' + x + ' é ' + resultado;
}

function aumento15() {
    const x = Number(document.getElementById("aumento15").value);
    resultado = x * 1.15;
    document.getElementById("resultado_aumento15").innerHTML = 'Olá, 15%  a mais de ' + x + ' é ' + resultado;
}

function desconto7() {
    const x = Number(document.getElementById("desconto7").value);
    resultado = x - x * 0.07;
    document.getElementById("resultado_desconto7").innerHTML = 'Olá, ' + x + ' com 7% de desconto é ' + resultado;
}