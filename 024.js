function CriarTurmas(){
    let quantidadeTurmas = parseFloat(document.querySelector("#turmas").value);

    document.querySelector("#campos").innerHTML = "";
    for (let i = 1; i <= quantidadeTurmas; i++) {
        document.querySelector("#campos").innerHTML += "Quantidade de alunos da turma" + i + "<input type='number' id='turma'+ i +" + "'<br>";
        
    }
}