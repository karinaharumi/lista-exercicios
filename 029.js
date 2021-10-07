function GerarTabuada(){
    let tabuada = parseFloat(document.querySelector("#tabuada").value);
    let inicio = parseFloat(document.querySelector("#inicio").value);
    let fim = parseFloat(document.querySelector("#fim").value);

    if(fim < inicio){
        document.querySelector("#resposta").innerHTML = "O número inal não pode ser menor que o inicial";
        return;
    }
    document.querySelector("#resposta").innerHTML = "Vou montar a tabuada de" + tabuada + "começando em" + inicio + "e terminando em" + fim + ":<br>";
    for (let i = inicio; i <= fim; i++) {
        document.querySelector("#resposta").innerHTML += i + "x" + tabuada + "=" + (tabuada * i) + "<br>";
        
    }
}

