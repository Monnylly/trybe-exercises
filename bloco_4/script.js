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