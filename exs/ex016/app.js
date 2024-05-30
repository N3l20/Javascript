function contar(){
    let txti=document.querySelector('#txti')
    let txtf=document.querySelector('#txtf')
    let txtp=document.querySelector('#txtp')
    let res=document.querySelector('#res')
    let ini=Number(txti.value)
    let fim=Number(txtf.value)
    let pas=Number(txtp.value)
    
    if (txtf.value=='' || txti.value=='' || txtp.value==''){
        alert('ERRO')
        throw new Error('ERRO')
    }
    //Contagem crescente
    if (fim-ini>0){
        for ( let c=ini;c<fim; c+=pas){
            res.innerHTML+=`${c} \u{1F449}`
        }
        res.innerHTML+='\u{1F3C1}'
    }else if(fim-ini<0){ //Cotagem decrescente
        for ( let c= ini;c>fim; c-=pas){
            res.innerHTML+=`${c} \u{1F449}`
        }
        res.innerHTML+='\u{1F3C1}'
    }else{
        alert('ERRO')
        throw new Error('ERRO')
    }
    
}