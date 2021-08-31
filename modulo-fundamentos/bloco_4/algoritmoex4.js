//4.3 JavaScript - Lógica de Programação e Algoritmos 4- Depois, faça uma pirâmide com n asteriscos de base:

let n =5;
let linhas = " ";

for (let index = 1; index <= 5; index +=1){
  for (let index = 1; index <= 5; index +=1){
    linhas += "*" + (n-1);
}
}
console.log(linhas);

let n =5;
let ast = "*";
let espaco = " ";
let resultado = 0;

for (let index = 1; index <= 5; index +=1){
  for (let a = 5; a <= 5; a -= 1){
    resultado = a * espaco;
    ast = resultado + ast;
 //   linhas += a + ;
}
}
console.log(espaco);
