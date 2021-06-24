//let nota = 75;

//if (nota > 80) {
 // console.log("aprovado");
//}
////lse if(nota < 80 && nota >= 60) {
  //console.log("voce esta na lista de espera");
//}
//else if (nota < 60){
 // console.log("voce foi reprovado")
//}

let processoSeletivo = "lista";

switch (processoSeletivo) {
  case "aprovada":
    console.log ("voce foi aprovada");
    break;
  case "lista":
    console.log ("voce esta na lista de espera");
    break;
  case "reprovada":
    console.log ("voce foi reprovada");
    break;
  default:
      console.log("valor não identificado")
}


let custo = 15;
let venda = 25;
let custoReal = custo + custo*(20/100);

let lucro = (venda - custoReal)* 1000;
  console.log("o lucro real da empresa será de" + lucro);


let salario = 3000;
let descInss = (salario *11/100);
let salarioBase = salario - descontolIr;
let valorIR = (salario * 7.5/100) - 142.80;
let deducaoIr = salarioBase - valorIR;
let salarioLiquido = salarioBase - deducaoIR;
  console.log(salarioLiquido);