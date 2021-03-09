let amigo = {nome: 'Vinícius', 
sexo: 'M',
 peso: 65.6,
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)