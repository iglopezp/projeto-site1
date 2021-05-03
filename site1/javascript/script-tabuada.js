function tabuada() {
    let num = window.document.querySelector('input#num');
    let tab = window.document.querySelector('select#tab');
    

    if(num.value.lenght == 0){
        window.alert("Digite um valor valido");
    } else {
        let n = Number(num.value);
        let c = 1;
        tab.innerHTML = '';
        while (c <= 10){
            let item = document.createElement('option');
            item.text = `${n} x ${c} = ${n*c}`;
            item.value = `tab${c}`;
            tab.appendChild(item);
            c++;
        }
    }
}

function recarregar() {
    window.location.reload();
}