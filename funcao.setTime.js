  //setTimeout é uma callbeck assincrona e nao é bloqueante 
  
  const funcao1 = () => { 
    setTimeout(() => {
      console.log('1-BigMac');
    }, 3000);


  const funcao2 = () => { 
    setTimeout(() => {
      console.log('2-Big-test');
    }, 3000);
  }

  console.log('lanches');

  funcao1();
  funcao2();

  console.log('fim');

// no exemplo abaixo posso definir com precisao a ordem de execução do codigo 

  const funcao1 = (callback) => { 
    setTimeout(() => {
      console.log('1-BigMac');
      callback();
    }, Math.random() * 5000); // usando o math.random vamos sortear o tempo pra execução 
  }

  const funcao2 = () => { 
    setTimeout(() => {
      console.log('2-Big-test');
    }, Math.random() * 5000);
  }

  console.log('lanches');

  funcao1(funcao2);
 // a funcao 2 sera a callback que foi passada como paramentro da funcao1
 
  console.log('fim');