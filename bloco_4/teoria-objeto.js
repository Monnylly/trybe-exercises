let player = {
  name :'Marta',
  lastName : 'Silva',
  age : 34,
  medals: {
    golden:'2',
    silver: '3' 
}
};

console.log( 'A jogadora ' + ' ' + player.name + ' ' + 'tem' + ' ' + player.age + ' anos de idade');

player['bestInTheWord'] = [2006, 2007, 2008, 2009, 2010, 2018];

for (let chave in player){
  console.log (chave);
}


for(let chave in player){
  console.log (player[chave]);
}




console.log(player.medals.golden)

console.log('A jogadora possui' + ' ' + player.medals.golden + ' ' + 'medalhas de ouro e' + ' ' + player.medals.silver + ' ' + 'medalhas de prata.');