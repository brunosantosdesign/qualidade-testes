// test/utils.test.mjs
// Aqui estamos importando funções essenciais para realizar os testes unitários
import { test, assert } from 'poku'; // 'poku' é o framework de teste que estamos usando, similar ao Jest ou Mocha

// Importa as funções que queremos testar do nosso arquivo utils.js
import {
  isEven,             // função que verifica se um número é par
  containsWord,       // função que verifica se uma palavra existe em uma frase
  isPalindrome,       // função que verifica se uma string é palíndromo
  hasSufficientBalance // função que verifica se um saldo é suficiente
} from '../src/utils.js';

// Teste para a função isEven, quando o número é par
test('isEven - caso verdadeiro', () => {
  // Verifica se isEven(4) retorna true
  // Se não retornar, a mensagem '4 deve ser par' será exibida
  assert(isEven(4), '4 deve ser par');
});

// Teste para a função isEven, quando o número não é par
test('isEven - caso falso', () => {
  // Verifica se isEven(3) retorna false
  // O '!' inverte o valor, então assert(!isEven(3)) espera que isEven(3) seja false
  assert(!isEven(3), '3 não deve ser par');
});

// Teste para a função containsWord, quando a palavra existe na frase
test('containsWord - verdadeiro', () => {
  // Verifica se 'mundo' está presente na frase 'Olá mundo, bem-vindo'
  assert(containsWord('Olá mundo, bem-vindo', 'mundo'), 'deve conter "mundo"');
});

// Teste para a função containsWord, quando a palavra não existe na frase
test('containsWord - falso', () => {
  // Verifica se 'terra' NÃO está presente na frase 'Olá mundo'
  assert(!containsWord('Olá mundo', 'terra'), 'não deve conter "terra"');
});

// Teste para a função isPalindrome, quando a frase é palíndromo
test('isPalindrome - verdadeiro', () => {
  // Verifica se a frase 'A man a plan a canal Panama' é palíndromo
  assert(isPalindrome('A man a plan a canal Panama'), 'é palíndromo');
});

// Teste para a função isPalindrome, quando a frase não é palíndromo
test('isPalindrome - falso', () => {
  // Verifica se 'Olá mundo' não é palíndromo
  assert(!isPalindrome('Olá mundo'), 'não é palíndromo');
});

// Teste para a função hasSufficientBalance, quando o saldo é suficiente
test('hasSufficientBalance - verdadeiro', () => {
  // Verifica se 100 é suficiente para pagar 50
  assert(hasSufficientBalance(100, 50), 'saldo suficiente');
});

// Teste para a função hasSufficientBalance, quando o saldo não é suficiente
test('hasSufficientBalance - falso', () => {
  // Verifica se 10 NÃO é suficiente para pagar 20
  assert(!hasSufficientBalance(10, 20), 'saldo insuficiente');
});
// --------------------------------------------------------------
// Fim do arquivo utils.test.mjs
// --------------------------------------------------------------