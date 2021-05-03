
let num =  window.document.querySelector('input#num');
let lista = window.document.querySelector('select#lista');
let res = window.document.querySelector('div#res');
let numeros = [];

function isValidNumber(n) {
   if (Number(n) >= 1 && Number(n) <= 100){
       return true;
   } else {
       return false;
   }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true;
    }else {
        return false;
    }
}

function adicionar(){
    if ( isValidNumber(num.value) && !inLista(num.value , numeros)){
    numeros.push(Number(num.value));
    let item = document.createElement('option');
    item.text = `Valor ${num.value} adicionado`;
    lista.appendChild(item);
    res.innerHTML = '';
        
    }else {
    window.alert("Numero invalido ou já está na lista")
    }
    num.value ='';
    num.focus();
}

function analisar() {
    if(numeros.length == 0){
        window.alert("Adicione Valores");
    } else {
        res.innerHTML = '';
        res.innerHTML += `</br>Total de numeros adicioandos: <strong> ${numeros.length}</strong></br>`;
        let maior = 0;
        let menor = 0;
        let soma = 0;
        let media = 0;
        for (let i in numeros){
            soma += numeros[i];
            media = soma/numeros.length;
            if (i == 0){
                maior = numeros[i];
                menor = numeros[i];
            }else {
                if (numeros[i] > maior){
                    maior = numeros[i];
                }
                if (numeros[i] < menor){
                    menor = numeros[i];
                }
            }

        }
        res.innerHTML += `</br> O maior número adicionado foi <strong>${maior}</strong> e o menor foi <strong>${menor}</strong></br>`;
        res.innerHTML += `</br> A soma de todos os elementos adicionados é: <strong>${soma}</strong></br>`;
        res.innerHTML += `</br> A media de todos os elementos adicionados é: <strong>${media}</strong></br>`;


    }
}

function recarregar() {
    window.location.reload();
}

    
