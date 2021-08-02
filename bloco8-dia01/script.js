// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma
//  nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa 
//  contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa 
//  funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .


const contratadosFunction = (fullname) => {
  const email = fullname.toLowerCase().split(' ').join('_');
  return { fullname, email: `${email}@trybe.com`};
}; 

const newEmployees = (contratadosFunctionallback) => {
  const employees = {
    id1: contratadosFunction ('Pedro Guerra'), 
    id2: contratadosFunction ('Luiza Drumond'), 
    id3: contratadosFunction ('Carla Paiva'), 
  }
  return employees;
};
console.log(newEmployees(contratadosFunction));

// Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
// Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
// Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas


// 2 - Crie uma função que reotorna o dano causado pelo warrior .
// O dano será um número aleatório entre o valor do atributo strength 
// (dano mínimo) e o valor de strength * weaponDmg (dano máximo).

const warriorAttack = (warrior) => {
  const { weaponDmg } = warrior;
  const minDmg = warrior.strength;
  const maxDmg = minDmg * weaponDmg;
  const warriorDamage = Math.floor((Math.random() * (maxDmg - minDmg + 1)) + minDmg);
  return warriorDamage;
};

// 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana 
// gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de 
// intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha
//  menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana 
//  gasta é 0.

const funcaoAtaque = (mage) => {
  const mageMana = mage.mana;
  const minDmg = mage.intelligence;
  const maxDmg = minDmg * 2;
  const objetoMago = {
    damageDealt: 'not enough mana...',
    mana: 0,
  };
  if (mageMana >15){
    const mageDamage = Math.floor(Math.random() * (maxDmg - minDmg +1)) + minDmg);
    turnStats.manaSpent = 15;
    turnStats.damageDealt = mageDamage;
    return turnStats;
  }
  return turnStats;
};