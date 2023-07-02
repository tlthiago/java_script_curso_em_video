function contar() {
    var inicio = document.getElementById("txti");
    var fim = document.getElementById("txtf");
    var passo = document.getElementById("txtp");
    var res = document.getElementById("res");

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = "Impossível contar!";
    } else {

        if (Number(passo.value) <= 0) {
            window.alert("Passo inválido! Considerando PASSO 1");
            passo.value = 1;
        }

        res.innerHTML = "Contando: <br>";

        if (Number(inicio.value) < Number(fim.value)) {
            //Contagem crescente
            for (var c = Number(inicio.value); c <= Number(fim.value); c += Number(passo.value)) {
                res.innerHTML += `${c} `;
            }
        } else {
            //Contagem decrescente
            for (var c = Number(inicio.value); c >= Number(fim.value); c -= Number(passo.value)) {
                res.innerHTML += `${c} `;
            }
        }
        res.innerHTML += `\u{1F3C1}`;
    }

}