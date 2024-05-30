let num=[5, 8, 2, 9, 3, ]
num.push(1)
num.sort()
console.log(`O vetor tem ${num.length} elementos`)
console.log(`${num}`)
console.log(`O 9 está na posição ${num.indexOf(9)}`)

for (let pos in num){
    console.log(num[pos])
}
/*for (c=0; c<num.length; c++){
   console.log(num[c])
}*/