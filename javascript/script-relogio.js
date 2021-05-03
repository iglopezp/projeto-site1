function carregar() {
    let msg = window.document.querySelector('div#msg');
    let photo = window.document.querySelector('img#photo');
    let data = new Date();
    let hora = data.getHours();
    //let hora = 10; //testar hora
    let min = data.getMinutes()
    //texto que aparecera no elemento com id msg
    msg.innerHTML = `<p><strong>Agora são ${hora} horas e ${min} minutos</strong></p></br>`;

    // Condiçoes para carregar imagem no relógio
    if (hora >= 0 && hora < 12){
        //bom dia 
        photo.src = '/site1/img/sunrise.png';
        //msg.innerHTML += ` A The World Store deseja um Bom Dia `;
    }else if (hora >= 12 && hora < 18){
        //boa tarde
        photo.src = '/site1/img/sunset.png';
        //msg.innerHTML += ` A the World Store deseja uma Boa Tarde`;
    }else{
        //boa noite
        photo.src = '/site1/img/night.png';
        //msg.innerHTML += ` A The World Store deseja uma Boa Noite`;
    }
}

