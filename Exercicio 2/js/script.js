function somar() {
    const x = Number(document.getElementById("x_soma").value);
    const y = Number(document.getElementById("y_soma").value);
    resultado = x + y
    alert('O resultado da soma entre ' + x + ' e ' + y + ' é ' + resultado)
    //document.getElementById("resultado_soma").innerHTML = 'O resultado da soma entre ' + x + ' e ' + y + ' é ' + resultado
}

function elevar() {
    const x = Number(document.getElementById("x_elevado").value);
    resultado = x * x
    document.getElementById("resultado_elevado").innerHTML = 'O resultado de ' + x + ' elevado ao quadrado é ' + resultado
}

function cumprimentar() {
    const nome = document.getElementById("nome").value;
    document.getElementById("resultado_cumprimento").innerHTML = 'Seja bem vindo, ' + nome;
}

function calculadora(operacao) {
    const x = Number(document.getElementById("x_calculadora").value);
    const y = Number(document.getElementById("y_calculadora").value);

    if (operacao == '+')
        resultado = x + y
    else if (operacao == '-')
        resultado = x - y
    else if (operacao == '*')
        resultado = x * y
    else
        resultado = x / y


    document.getElementById("resultado_calculadora").innerHTML = 'O resultado de ' + x + ' ' + operacao + ' ' + y + ' é ' + resultado
}

function calcular_idade() {
    const idade = new Date(document.getElementById("idade").value);
    const data = new Date("2030/12/31")
    let resultado = data.getFullYear() - idade.getFullYear()
    document.getElementById("resultado_idade").innerHTML = 'Você irá completar ' + resultado + ' anos em 2030';
}