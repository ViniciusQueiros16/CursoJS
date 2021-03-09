let num = document.getElementById('txtn')
let tab = document.getElementById('selnum')
let res = document.getElementById('res')
let numeros = []

function eNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    }else {
        return false
    }
}

function emLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if (eNumero(num.value) && !emLista(num.value, numeros)){
        numeros.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        tab.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('Valor invalido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function maior(){
    let mai = 0
    for (let c in numeros){
        if (numeros[c] > mai){
            mai = numeros[c]
        }
    }
    return mai
}

function menor(){
    let men = 100
    for (let c in numeros){
        if (numeros[c] < men){
            men = numeros[c]
        }
    }
    return men
}

function somar() {
    let s = 0
    for (let c in numeros){
        s += numeros[c]
    }
    return s
}

function finalizar(){
    if (numeros.length == 0){
        window.alert('Adicione valores antes de finalizar.')
    }else{
        res.innerHTML = ''
        res.innerHTML += `Ao todo temos ${numeros.length} números cadastrados.<br/>`
        res.innerHTML += `O maior valor informado foi ${maior()}.<br/>`
        res.innerHTML += `O menor valor informado foi ${menor()}.<br/>`
        res.innerHTML += `Somando todos os valores temos ${somar()}.<br/>`
        res.innerHTML += `A média de todos os valores digitados é ${somar() / numeros.length}.`
    }   
}