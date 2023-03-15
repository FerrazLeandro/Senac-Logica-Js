let alunos = {
    nome: [],
    telefone: []
};

let funcionarios = {
    nome: [],
    funcao: [],
    salario: []
};

function criarAluno() {
    alunos.nome.push(document.getElementById("nome").value)
    alunos.telefone.push(document.getElementById("telefone").value)

    if (!!document.getElementById("novoAtributo")) {
        alunos.atributo.push(document.getElementById("novoAtributo").value)
        resultado = "Nome: " + alunos.nome + '<br><br>' + " Telefone: " + alunos.telefone + '<br><br>' + " Atributo: " + alunos.atributo + '<br>';
    } else {
        resultado = "Nome: " + alunos.nome + '<br><br>' + " Telefone: " + alunos.telefone + '<br>';
    }

    document.getElementById("resultado").innerHTML = resultado;
}

function criarAtributo() {
    const atributo = document.getElementById("nomeAtributo").value
    alunos = {
        nome: [],
        telefone: [],
        atributo: []
    }
    document.getElementById("resultadoAtributo").innerHTML = '<label for="atributo">' + atributo + ': </label><input type="text" id="novoAtributo" name="novoAtributo" placeholder="Informe o "' + atributo + '>'
}

function exibirNomes() {
    document.getElementById("nomeAlunos").innerHTML = "Alunos: " + '<br>' + alunos.nome
}

function cadastrarFuncionario() {
    funcionarios.nome.push(document.getElementById("nomeFuncionario").value);
    funcionarios.funcao.push(document.getElementById("funcaoFuncionario").value);
    funcionarios.salario.push(Number(document.getElementById("salarioFuncionario").value));
}

function nomeFuncao() {
    document.getElementById("nomeFuncao").innerHTML = ''

    for (let i = 0; i < funcionarios.nome.length; i++) {
        document.getElementById("nomeFuncao").innerHTML += '<br>' + "Nome: " + funcionarios.nome[i] + '<br>' + "Função: " + funcionarios.funcao[i];
    }
}

function nomeSalario() {
    document.getElementById("nomeFuncao").innerHTML = ''

    for (let i = 0; i < funcionarios.nome.length; i++) {
        document.getElementById("nomeFuncao").innerHTML += '<br>' + "Nome: " + funcionarios.nome[i] + '<br>' + "Salário: " + funcionarios.salario[i];
    }
}

function custoTotal() {
    document.getElementById("nomeFuncao").innerHTML = ''
    let resultado = 0;

    for (let i = 0; i < funcionarios.nome.length; i++) {
        resultado += funcionarios.salario[i]
    }

    document.getElementById("nomeFuncao").innerHTML += '<br>' + "Total de salários: " + resultado
}

function gerentes() {
    document.getElementById("nomeFuncao").innerHTML = ''

    for (let i = 0; i < funcionarios.funcao.length; i++) {
        if (funcionarios.funcao[i].toUpperCase() == "GERENTE")
            document.getElementById("nomeFuncao").innerHTML += '<br>' + "Nome: " + funcionarios.nome[i] + '<br>' + "Salário: " + funcionarios.salario[i];
    }
}