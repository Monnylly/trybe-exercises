  //11 fazer correcoes
  let salario = 3000;
  let descInss = (salario *11/100);
  let salarioBase = salario - descontolIr;
  let valorIR = (salario * 7.5/100) - 142.80;
  let deducaoIr = salarioBase - valorIR;
  let salarioLiquido = salarioBase - deducaoIR;
    console.log(salarioLiquido);