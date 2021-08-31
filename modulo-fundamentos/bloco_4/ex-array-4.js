let numbers = [5, 9, 3, 19, 70, 100, 8, 2, 35, 27];
let soma = 0;
let media;

for(index = 0; index < numbers.length; index += 1){
  soma += numbers[index];
  media = soma / numbers.length;;
}
if(media >20){
  console.log("valor da média é maior que 20");
}else{
  console.log("valor da média menor que 20");
}

//console.log(media);