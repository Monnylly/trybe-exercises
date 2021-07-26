const assert = require('assert');

function add(a, b) {
  return a + b;
}

const expected = add(1, 2);

//assert.ok(expected === 3, 'Um mais dois é igual a três'); // Checa se o primeiro argumento é verdadeiro
assert.strictEqual(expected, 3, 'Um mais dois é igual a três'); // Checa se o primeiro e segundo argumentos são iguais em valor e tipo (===)
//assert.notStrictEqual(expected, 4, 'Um mais dois é igual a três (e não quatro!)'); // Checa se o primeiro e segundo argumentos são diferentes (!==)


//exerc 1 
const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }
  return a + b;
}

//assert.strictEqual(sum(4, 5), 9);
//ok deu certo
//assert.strictEqual(sum(0, '0'), 0);
//ok deu certo 
//assert.strictEqual(sum(4, 'a'), 4);
//ao executar causa erro pois espera uma concatenacao devido 5 vir como string
assert.strictEqual(sum(4, '5'),'parameters must be numbers');
// implemente seus testes aqui