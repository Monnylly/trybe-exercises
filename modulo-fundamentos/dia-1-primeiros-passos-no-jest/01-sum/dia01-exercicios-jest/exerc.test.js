// const { test, expect } = require('@jest/globals');
// const sum = require('./sum.js');

// implemente seus testes aquiTeste se o retorno de sum(4, 5) é 9

// test('verifica se o retorno da soma de 4 e 5 é 9', () => {
//   expect(sum(4, 5).toBe(9));
// });

// sum.test.js
const sum = require('./sum');

describe('sum', () => {
  test('4 plus 5 equals 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  test('throws an error when a string is passed', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow();
  });

  test('0 plus 0 equals 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  test('error message is "parameters must be numbers"', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow(/parameters must be numbers/);
  });
});