document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("calc-form");
    const nomeInput = document.getElementById("nome");
    const nomeError = document.getElementById("nome-error");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        //Fazendo a validação do nome

        if(!nomeInput.value) {
            nomeError.style.display = "block";
            return;
        } else {
            nomeError.style.display = "none";
        }

        const nome = nomeInput.value;
        const altura = parseFloat(document.getElementById("altura").value);
        const peso = parseFloat(document.getElementById("peso").value);
        console.log(nome ,altura, peso);

        const imc = peso / (altura * altura)
        const resultadoElement = document.getElementById("resultado");

        let categoria;

        if (imc < 18.5) {
            categoria = "Abaixo do peso";
            resultadoElement.style.backgroundColor = "#ffff00"
        } else if (imc < 25) {
            categoria = "Peso Normal";
            resultadoElement.style.backgroundColor = "#00ff00";
        } else if ( imc < 30) {
            categoria = "Sobrepeso"
            resultadoElement.style.backgroundColor = "#ffA500";
        } else {
            categoria = "Obesidade"
            resultadoElement.style.backgroundColor = "#ff0000ff";
        }

        resultadoElement.innerHTML = `<p>${nome}, seu imc é ${imc.toFixed(
          2
        )}.</p><p>Você está na categoria: ${categoria}</p>`;

        document.getElementById("categoria").value = categoria;

        let dados = new FormData(formulario);

        for (let [chave, valor] of dados.entries())
            console.log(chave + " : " + valor);
    })
})