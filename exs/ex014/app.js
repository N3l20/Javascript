function carregar(){
    let msg = document.querySelector('#msg')
    let img = document.querySelector('#imagem')
    let data= new Date()
    let hora= data.getHours()
    msg.innerHTML= `Agora são ${hora} horas`
    if (hora>= 0&& hora<12){
        //Bom dia
        img.src='img/fotoManha.png'
        document.body.style.backgroundColor= '#fdb759'
    }else if(hora>= 12 && hora< 19){
        //Boa tarde
        img.src='img/fotoTarde.png'
        document.body.style.backgroundColor='#fd8d02'
    }else{
        //Boa noite
        img.src='img/fotoNoite.png'
        document.body.style.backgroundColor='#23283b'
    }
}


