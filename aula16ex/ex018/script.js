let numero = document.getElementById("fnum");
let lista = document.getElementById("lista");
let res = document.getElementById("res");
let vetor = [];

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}

function adicionar() {
    if(isNumero(numero.value) && !inLista(numero.value, vetor)) {
        window.alert("Tudo OK!");
        vetor.push(numero.value);
        let item = document.createElement('option');
        item.text = `Valor ${numero.value} adicionado.`;
        lista.appendChild(item);
        window.alert(vetor);
    } else {
        window.alert("Valor inválido ou já encontrado na lista.")
    }
    /*

    function percorreVetor(n) {
        for (n in vetor) {
            return n;
        }
    }
    */
}

/*
function finalizar() {
    if () {
        window.alert("Adicione valores antes de finalizar!");
    } else {
        vetor.sort();

        let maior = vetor[vetor.length].value;
        let menor = vetor[0].value;
        let soma = 0
    
        for (let contador = 0; contador < vetor.length; contador++) {
            soma += vetor[contador].value;
        }
    
        res.innerHTML = `<p>Ao todo, temos ${vetor.length} numeros cadastrados.<p>`;
        res.innerHTML += `<p>O maior valor informado foi ${maior}<p>`;
        res.innerHTML += `<p>O menor valor informado foi ${menor}<p>`;
        res.innerHTML += `<p>Somando todos os valores, temos: ${soma}</p>`;
        res.innerHTML += `<p>A média dos valores digitados é: ${soma/vetor.length}</p>`;
    }
}
*/