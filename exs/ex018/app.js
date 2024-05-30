let n=[]
let c =0

function adicionar(){
    let txtn=document.querySelector('#num').value
    
    if (Number(txtn)>=100 || Number(txtn)<=0 || n.indexOf(Number(txtn))!==-1 || txtn.length==0){
        alert('Valor inválido ou já encontrado na lista')
        throw new Error('Valor inválido ou já encontrado na lista')
    }

    n[c]= Number(document.querySelector('#num').value)
    let res = document.querySelector('#list')

    let item = document.createElement('option')
    item.innerHTML=`Valor ${n[c]} foi adicionado`
    res.appendChild(item)
    c++

    document.querySelector('#p1').innerHTML=``
    document.querySelector('#p2').innerHTML=``
    document.querySelector('#p3').innerHTML=``
    document.querySelector('#p4').innerHTML=``
    document.querySelector('#p5').innerHTML=``
}

function finalizar(){
    if (n.length==0){
        alert('Digite algo')
        throw new Error('Digite algo')
    }
    let som= n.reduce((partialSum, a) => partialSum + a, 0)
    let med= som/n.length
    
    document.querySelector('#p1').innerHTML=`Ao todo temos ${n.length} números calculados`
    document.querySelector('#p2').innerHTML=`O maior valor informado foi ${Math.max(...n)}`
    document.querySelector('#p3').innerHTML=`O menor valor informado foi ${Math.min(...n)}`
    document.querySelector('#p4').innerHTML=`Somando todos os valores, temos ${som}`
    document.querySelector('#p5').innerHTML=`A média dos valores é ${med}`
}
