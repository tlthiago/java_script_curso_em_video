let valores = [8, 1, 7, 4, 2, 9];

/*
for (let contador = 0; contador < valores.length; contador++) {
        console.log(`${valores[contador]}`)
}
*/

valores.sort();

for (let contador in valores) {
    console.log(`A posição ${contador} do vetor tem valor ${valores[contador]}`);
}

let encontra = valores.indexOf(17);
if (encontra == -1) {
    console.log("O valor não foi encontrado");
} else {
    console.log(`O valor 7 está na posição ${encontra}`);
}