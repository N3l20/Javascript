let idade=67
console.log(`Você tem ${idade} anos`)
if (idade<16){
    console.log('Não vota')
}else if(idade<18 || idade>65){//codição aninhada 'Else if'
        console.log('Voto opcional')//só no Brasil
    }else{
        console.log('Voto obrigatório')  
    }
