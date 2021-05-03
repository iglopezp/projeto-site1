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
                img.setAttribute('src','child-male.png');
            }else if (idade <= 25){
                //jovem
                img.setAttribute('src', 'young-male.png');
            }else if (idade <= 55){
                //adulto
                img.setAttribute('src', 'adult-male.png');
            }else {
                //idoso
                img.setAttribute('src', 'old-male.png');
            }
        } else {
            gender = 'Mulher';
            if (idade > 0 && idade <= 10) {
                //criança
                img.setAttribute('src', 'child-female.png');
            }else if (idade <= 25){
                //jovem
                img.setAttribute('src', 'young-female.png')
            }else if (idade <= 55){
                //adulto
                img.setAttribute('src','adult-female.png');
            }else {
                //idoso
                img.setAttribute('src', 'old-female.png');
            }
        }

        res.innerHTML = `Detectamos: ${gender} de ${idade} anos de idade`;
        res.appendChild(img);

    }

}