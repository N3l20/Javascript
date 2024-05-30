
function tabuada(){
    let num = document.querySelector('#txtn')
    let res=document.querySelector('#res')
    let c=1

    if (num.value.length==0){
        alert('Digite um número')
        throw new Error('ERRO')
    }else{
        let n=Number(num.value)
        res.innerHTML=''
         while (c<=10){
            let item= document.createElement('option')
            item.innerHTML=`${n}*${c}=${n*c}`
            item.value=`tab${c}`
            res.appendChild(item)
          c++
        }
    }
}

