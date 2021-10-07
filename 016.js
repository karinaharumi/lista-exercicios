function VerificarDiaDaSemana(){
    let dia = document.querySelector("#dia").value;
    let diaDaSemana = "";

    if (dia == 1){
        diaDaSemana = "Domingo";
    }else if(dia ==2){
        diaDaSemana = "Segunda-feira";
    }else if(dia == 3){
        diaDaSemana = "Terça-feira";
    }else if(dia == 4){
        diaDaSemana = "Quarta-feira";
    }else if(dia == 5){
        diaDaSemana = "Quinta-feira";
    }else if(dia == 6){
        diaDaSemana = "Sexta-feira";
    }else if(dia == 7){
        diaDaSemana = "Sábado";
    }else{
        diaDaSemana = "valor inválido";
    }

    document.querySelector("#resposta").innerHTML = diaDaSemana;
}