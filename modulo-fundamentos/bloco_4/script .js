//1
let a = 5;
let b = 8;

console.log(a * b);
console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a % b);

//2
if (a < b ){
  console.log("b é maior que a")
}
else if (a <b) {
  console.log ("a é menor que b")
}
else if (a == b) {
  console.log ("a é igual a b")
}

//2
let num1 = 15;
let num2 = 11;

if (num1 > num2){
  console.log("num1  é maior que o num2");
}else{
  console.log("num2  é maior que o num1");
}
//3
let n1 =5;
let n2 = 12;
let n3 = 8;

if (n1 > n2 && n1> n3){
  console.log("O número maior é n1");
}else if (n2> n1 && n2 > n3){
  console.log("O número maior é n2");
}else if (n3 > n2 && n3 > n2){
  console.log("O número maior é n3")
}
//4
let num = -5;

if (num > 0){
  console.log ("POSITIVO")
}
else if(num < 0){
  console.log("NEGATIVO")
}else{
  console.log("ZERO")
}
// 5
let angulo1 = 40;
let angulo2 = 50;
let angulo3 = 90;


if (angulo1 + angulo2 + angulo3 == 180){
  console.log("true")
}else{
  console.log("false")
}
//6 nao consegui fazer


//7 nao consegui fazer

let nota= 95;
//let porcentagem = (nota *100)/100;

if (nota >=90){
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
}else{
  console.log("ERRO")
}

//switch (porcentagem) {
//  case "porcentagem >= 90":
//  console.log("A");
//  break;
//case "porcentagem >= 80":
///  console.log("B");
 // break;
//case "porcentagem >= 70"":
 // console.log("C");
  //break;
//case "porcentagem >= 60":
 // console.log("D");
  //break;
//case "porcentagem >= 50":
 // console.log("E");
  //break;
//case "porcentagem < 50":
//  console.log("F");
 // break;
///default:
  //console.log("erro");
//}

//8
let n1 = 5;
let n2 = 7; 
let n3 = 4;

if (n1 %2 == 0 || n2 %2 == 0 || n3 %2 ==0){
  console.log("TRUE");
}else {
  console.log("FALSE");
}

//9

let n1 = 8;
let n2 = 3; 
let n3 = 9;

if (n1 %2 != 0 || n2 %2 != 0 || n3 %2 !=0){
  console.log("TRUE");
}else {
  console.log("FALSE");
}
//10

let custo = 15;
let venda = 25;
let custoReal = custo + custo *(20/100);

let lucro = (venda - custoReal)* 1000;
  console.log("o lucro real da empresa será de R$" + lucro);


  //11 fazer correcoes
let salario = 3000;
let descInss = (salario *11/100);
let salarioBase = salario - descontolIr;
let valorIR = (salario * 7.5/100) - 142.80;
let deducaoIr = salarioBase - valorIR;
let salarioLiquido = salarioBase - deducaoIR;
  console.log(salarioLiquido);