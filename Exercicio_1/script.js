function converter() {
    // Obter o valor em BRL do input
    var valorBRL = parseFloat(document.getElementById("inputBRL").value);

    // Definir a taxa de convers�o
    const taxaConversao = 0.193259;

    // Calcular o valor em USD
    var valorUSD = valorBRL * taxaConversao;

    // Exibir o resultado na p�gina
    document.getElementById("resultado").innerHTML = "O valor em BRL �: " + valorBRL.toFixed(2) + " BRL<br>" +
        "O valor em USD �: " + valorUSD.toFixed(2) + " USD";
}
