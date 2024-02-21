function converter() {
    // Obter o valor em BRL do input
    var valorBRL = parseFloat(document.getElementById("inputBRL").value);

    // Definir a taxa de conversão
    const taxaConversao = 0.193259;

    // Calcular o valor em USD
    var valorUSD = valorBRL * taxaConversao;

    // Exibir o resultado na página
    document.getElementById("resultado").innerHTML = "O valor em BRL é: " + valorBRL.toFixed(2) + " BRL<br>" +
        "O valor em USD é: " + valorUSD.toFixed(2) + " USD";
}
