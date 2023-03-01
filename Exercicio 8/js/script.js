function calcularNumerosAleatorios() {
    let resultado = [];

    for (let index = 0; index < 10; index++) {
        resultado.push(Math.floor(Math.random() * 1000));
    }

    document.getElementById("resultadoNumerosAleatorios").innerHTML = "Resultado " + resultado;
}

function calcularNumerosAleatoriosAlterado() {
    let resultado = [];

    for (let index = 0; index < 5; index++) {
        resultado.push(Math.floor(Math.random() * 10));
    }

    document.getElementById("resultadoNumerosAleatoriosAlterado").innerHTML = "Resultado " + resultado + '<br>';

    document.getElementById("resultadoNumerosAleatoriosAlterado").innerHTML += '<br><label for="numeroAlterado">Qual número deseja alterar: </label><input type="number" id="numeroAlterado" name="numeroAlterado" placeholder="Informe um número"><br><label for="numeroAlterado">Qual número deseja inserir: </label><input type="number" id="numeroInserir" name="numeroInserir" placeholder="Informe um número"><br><input type="button" class="botao" onclick="calcularNumerosAleatoriosAlteradoUsuario(resultado)" value="Alterar">'
}

function calcularNumerosAleatoriosAlteradoUsuario(resultado){
    const numero = document.getElementById("numeroAlterado").value; 
    const resultado2 = resultado.find(element => element == numero);
    alert(resultado2);

}