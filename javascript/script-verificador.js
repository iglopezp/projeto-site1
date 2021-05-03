function verificar() {
    let data = new Date();
    let ano = data.getFullYear();
    let fano = window.document.querySelector('input#txtano');
    let res = window.document.querySelector('div#res');
    //criando uma elemento img (html) de forma dinamica
    let img = document.createElement('img');
    //Atribuindo uma id ao elemnto criado
    img.setAttribute('id', 'photo');


    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert("Verifique os dados e tente novamente");
    } else {
        let fsex = window.document.getElementsByName('radsex');
        let idade = ano - Number(fano.value);
        let gender = '';
        if (fsex[0].checked) {
            gender = 'Homem';
            if (idade > 0 && idade <= 10) {
                //criança
                img.setAttribute('src','/img/child-male.png');
            }else if (idade <= 25){
                //jovem
                img.setAttribute('src', '/img/young-male.png');
            }else if (idade <= 55){
                //adulto
                img.setAttribute('src', '/img/adult-male.png');
            }else {
                //idoso
                img.setAttribute('src', '/img/old-male.png');
            }
        } else {
            gender = 'Mulher';
            if (idade > 0 && idade <= 10) {
                //criança
                img.setAttribute('src', '/img/child-female.png');
            }else if (idade <= 25){
                //jovem
                img.setAttribute('src', '/img/young-female.png')
            }else if (idade <= 55){
                //adulto
                img.setAttribute('src','/img/adult-female.png');
            }else {
                //idoso
                img.setAttribute('src', '/img/old-female.png');
            }
        }

        res.innerHTML = `Detectamos: ${gender} de ${idade} anos de idade`;
        res.appendChild(img);

    }

}