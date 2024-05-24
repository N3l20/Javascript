

function submit(){
    let data=new Date()
    let img=document.querySelector('#img1')

    //Verificar idade
    let ano=document.querySelector('#ano').value
    let anoAtual=data.getFullYear()
    let idade= anoAtual-ano
    let txt=document.querySelector('#txt')

    if (idade<0){
        alert('Idade inválida')
        throw new Error('Idade inválida')
    }
    
    //Verificar sexo
    if(document.querySelector('#Fem').checked == true){
        globalThis.sexo='Mulher'
    }else if(document.querySelector('#Masc').checked==true ){
        globalThis.sexo='Homem'
    }else{
        alert('Selecione uma opção')
    }
    
    //Mostar imagem e texto
    txt.innerHTML=`Detetamos ${sexo} com ${idade} anos.`

    if(idade<=9){
        switch (sexo){
            case 'Homem':
                img.src='img/criançaM.png'
                break
            case 'Mulher':
                img.src='img/criançaF.png'
                break
        }
    }else if(idade<15){
        switch (sexo){
            case 'Homem':
                img.src='img/jovemM.png'
                break
            case 'Mulher':
                img.src='img/jovemF.png'
                break
        }
    }else if(idade<=24){
        switch (sexo){
            case 'Homem':
                img.src='img/adolescenteM.png'
                break
            case 'Mulher':
                img.src='img/adolescenteF.png'
                break
        }
    }else if(idade<60){
        switch (sexo){
            case 'Homem':
                img.src='img/adultoM.png'
                break
            case 'Mulher':
                img.src='img/adultoF.png'
                break
        }
    }else{
        switch (sexo){
            case 'Homem':
                img.src='img/velhoM.png'
                break
            case 'Mulher':
                img.src='img/velhoF.png'
                break
        }
    }
}

