let agora=new Date()
let diaSem= agora.getDay()

switch(diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1: 
        console.log('Segunda-feira')
        break
    case 2:
        console.log('Terça-Feira')
        break
    case 3:
        console.log('Quarta-Feira')
        break
    case 4:
         console.log('Quinta-Feira')
        break
    case 5:
         console.log('Sexta-Feira')
         break
    case 6:
        console.log('Sábado')
        break  
    default:
        console.log('Erro. Dia da semana inválido!')
        break
}