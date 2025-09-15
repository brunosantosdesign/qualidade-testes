// src/utils.js
// Este arquivo contém funções utilitárias (helpers), 
// que podem ser reutilizadas em várias partes do projeto.


// ------------------------------
// Verifica se um número é par
// ------------------------------
export function isEven(n) {
  // Retorna true se 'n' for um número e também for par (divisível por 2).
  return typeof n === 'number' && n % 2 === 0;
}


// ------------------------------
// Escapa caracteres especiais em uma string
// ------------------------------
// Função auxiliar que transforma caracteres especiais (.*+?^${}()|[]\) em versões seguras
// para que possam ser usados dentro de expressões regulares sem quebrar a lógica.
function escapeRegExp(s) { 
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}


// ------------------------------
// Verifica se uma frase contém uma palavra específica
// ------------------------------
export function containsWord(phrase, word) {
  // Retorna false se qualquer parâmetro não for string
  if (typeof phrase !== 'string' || typeof word !== 'string') return false;

  // Cria uma expressão regular que procura a palavra inteira (\b = word boundary),
  // insensível a maiúsculas/minúsculas (flag "i").
  const re = new RegExp(`\\b${escapeRegExp(word)}\\b`, 'i');

  // Testa se a expressão encontra a palavra dentro da frase
  return re.test(phrase);
}


// ------------------------------
// Verifica se um texto é palíndromo
// ------------------------------
export function isPalindrome(text) {
  // Se não for string, retorna false
  if (typeof text !== 'string') return false;

  // Normaliza o texto:
  // - Transforma em minúsculas
  // - Remove todos os caracteres que não são letras ou números
  const cleaned = text.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Se depois da limpeza não sobrou nada, não é considerado palíndromo
  if (cleaned.length === 0) return false;

  // Compara o texto limpo com sua versão invertida
  return cleaned === cleaned.split('').reverse().join('');
}


// ------------------------------
// Verifica saldo suficiente para compra
// ------------------------------
export function hasSufficientBalance(balance, price) {
  // Se os valores não forem numéricos, retorna false
  if (typeof balance !== 'number' || typeof price !== 'number') return false;

  // Retorna true se o saldo (balance) for maior ou igual ao preço
  return balance >= price;
}
// --------------------------------------------------------------
// Fim do arquivo utils.js
// --------------------------------------------------------------