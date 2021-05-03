function contar() {
    let inicio = window.document.querySelector('input#txti');
    let fim = window.document.querySelector('input#txtf');
    let passo = window.document.querySelector('input#txtp');
    let res = window.document.querySelector('div#res');

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert("Por favor preencha os campos vazios");
    }else {
        if (passo.value <= 0){
            window.alert("Passo invalido");

        }else {
            res.innerHTML = `Contando:`;
            //Contagem crescente 
            for(let i = Number(inicio.value); i <= Number(fim.value); i += Number(passo.value)){
            res.innerHTML += `\u{1F449} ${i}...`;
            }
        res.innerHTML += `Fim da contagem.`
        }
        
    }// desenvolver a constagem regressiva


}
function recarregar() {
    window.location.reload();
}