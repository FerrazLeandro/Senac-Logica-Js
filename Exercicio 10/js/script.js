let alunos = {
    nome: [], 
    telefone: []
};

function criarAluno() {
    alunos.nome.push(document.getElementById("nome").value)
    alunos.telefone.push(document.getElementById("telefone").value)
    console.log(alunos)


    document.getElementById("resultado").innerHTML = "Nome: " + alunos.nome + '<br><br>' + " Telefone: " + alunos.telefone + '<br>';

}