// function testingScope(escopo) {
//   if (escopo === true) {
//     var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//     console.log(ifScope);
//   } else {
//     var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
//   console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }

// testingScope(true);
//1-Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.

const testingScope= escopo => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  console.log(`${ifScope} o que estou fazendo aqui ? :O`); 
}

testingScope(true);


//Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".


const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
const sortOrdersAndEvents = () => {
  oddsAndEven[0]= 2
  oddsAndEven[1]= 3
  oddsAndEven[2]= 4
  oddsAndEven[3]= 7
  oddsAndEven[4]= 10
  oddsAndEven[5]= 13

  return oddsAndEvens
}
const sortedArray = sortOrdersAndEvents();

console.log(`Os numeros ${sortedArray} se encontram ordenados de forma crescente`);

//Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.


//parte2
//Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre let , 
//const , arrow functions , template literals e ternary operator 
//1Crie uma função que receba um número e retorne seu fatorial.
//Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
//Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .
//Crie uma função que receba uma frase e retorne qual a maior palavra.

const factorial = number => {
  let result = 1;

  for (let index = 1; index <= number; index += 1){
    result *= index;
  }
  return result
}
console.log(factorial(3));

//Crie uma função que receba uma frase e retorne qual a maior palavra.
const longstWord = text =>{
  let wordArray = text.split(' ')
  let maxLength = 0
  let result = ''

  for (const word of wordArray){
    if(word.length > maxLength){
      maxLength = word.length
      result = word
    }
  }
  return result
}
console.log(longestWord('Antonio foi ao banheiro e não sabemos o que aconteceu'))

//parte2
//1 Crie uma página que contenha:

//ex 4
///resposta da 4
const array = ["Android", "iOS", "Architecture", "Teach", "Run"];

function buildSkillsPhrase (paramOne) {
    const fun1 = paramInner => (
      `Tryber ${paramInner} aqui!

      Tudo bem?`
    );

    let result = `${fun1(paramOne)}

    Minhas cinco principais habilidades são:`;

    array.forEach((skill, index) =>
    result = `${result}

    - ${skill}`);

    result = `
{result}

    #goTrybe
    `;

    return result;
}

console.log(buildSkillsPhrase("Lucas"));