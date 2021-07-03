//2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:


let n =5;
  let asteristico = "";
  let resultado = "*";

  for (let linha =1; linha <=5; linha +=1){
    asteristico = resultado + asteristico;
    console.log(asteristico);
  }