let precoUnitario = 1.99;
for (let i = 1; i <= 50; i++) {
    document.querySelector("#resposta").innerHTML += i + "- R$" + (precoUnitario * i) + "<br>";
    
}