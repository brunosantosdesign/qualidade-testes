# Atividade Prática 03 – Qualidade e Testes de Software

## 🎯 Objetivo
Implementar uma pequena aplicação com **4 métodos** e seus respectivos **testes automatizados**, utilizando **JavaScript + [Poku](https://github.com/weslleyaraujo/poku)** como test runner.

---

## 📦 Estrutura do Projeto
```tree
qualidade-testes/
├─ src/
│ └─ utils.js # Funções principais
├─ test/
│ └─ utils.test.mjs # Testes automatizados
├─ package.json
└─ README.md
```


---

## 🔧 Funções Implementadas
- `isEven(n)` → retorna **true** se o número for par.  
- `containsWord(phrase, word)` → verifica se a palavra existe dentro da frase.  
- `isPalindrome(text)` → verifica se um texto é palíndromo.  
- `hasSufficientBalance(balance, price)` → verifica se o saldo é suficiente para a compra.  

---

## ✅ Testes Automatizados
Cada função possui **caso positivo e caso negativo**, usando `assert` do Node (equivalente a `assertTrue` e `assertFalse`).

Exemplo:
```js
test('isEven - caso verdadeiro', () => {
  assert(isEven(4), '4 deve ser par');
});

test('isEven - caso falso', () => {
  assert(!isEven(3), '3 não deve ser par');
});
```

---

## 🚀 Como Executar os Testes

1. Instalar dependências:

```bash
npm install
```

## 2. Rodar os testes:

```bash
npm test
```
ou, alternativamente:

```bash
npx poku
```

## ✅ Saída Esperada

```bash
✔ isEven - caso verdadeiro
✔ isEven - caso falso
✔ containsWord - verdadeiro
✔ containsWord - falso
✔ isPalindrome - verdadeiro
✔ isPalindrome - falso
✔ hasSufficientBalance - verdadeiro
✔ hasSufficientBalance - falso

8 tests passed ✔
```






