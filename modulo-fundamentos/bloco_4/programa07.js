let nota= 20;
//let porcentagem = (nota *100)/100;


if(nota< 0 || nota > 100){
  console.log("ERRO");
}else if (nota>=90 && nota<100){
  console.log("A");
}else if (nota >=80){
  console.log("B");
}else if(nota >=70){
  console.log("C");
}else if (nota >=60){
  console.log("D");
}else if(nota >=50){
  console.log("E");
}else if(nota <50){
  console.log("F");
}
