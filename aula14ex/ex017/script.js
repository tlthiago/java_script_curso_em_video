function gerar() {
    let n = document.getElementById("txtn");
    let tab = document.getElementById("seltab");

    let numero = Number(n.value);

    if (numero == "") {
        window.alert("Por favor, digite um número!")
    } else {
        tab.innerHTML = ""; //Limpar o select
        for (let contador = 1; contador <= 10; contador++) {
            let item = document.createElement('option'); //Cria um elemento ((ou seja, uma opção) para o select do HTML
            item.text = `${numero} x ${contador} = ${numero * contador}` //texto que é a parte de dentro do option recebe o calculo
            tab.appendChild(item) //Adiciona um elemento filho (item) ao elemento HTML tabuada
        }
    }

}