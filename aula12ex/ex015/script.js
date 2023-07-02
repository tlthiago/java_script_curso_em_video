function verificar() {
    var data = new Date();
    var ano = data.getFullYear(); //pegar ano com 04 dígitos
    var fAno = window.document.getElementById('txtano'); //Formulário ano
    var res = window.document.getElementById('res');

    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert(`[ERRO] Verifique os dados e tente novamente!`);
    } else {
        var fSex = document.getElementsByName('radsex');
        var idade = ano - Number(fAno.value);
        var genero = "";
        var img = document.createElement('img'); //Cria uma tag img
        img.setAttribute('id', 'foto'); //Adiciona um atributo Id para a tag img com o nome foto

        if (fSex[0].checked) {
            genero = "Homem";
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'foto-crianca-m.png');
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'foto-jovem-m.png');
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'foto-adulto-m.png');
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-m.png');
            }
        } else if (fSex[1].checked) {
            genero = "Mulher";
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'foto-crianca-f.png');
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'foto-jovem-f.png');
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'foto-adulto-f.png');
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-f.png');
            }
        }

        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
    }

}