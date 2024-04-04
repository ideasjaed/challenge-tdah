/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

for (let index = 1; index <= 100; index++) {
  let value = index;
  const fizz = "fizz";
  const buzz = "buzz";
  const is3 = index % 3 === 0;
  const is5 = index % 5 === 0;
  if (is3) value = fizz;
  if (is5) value = buzz;
  if (is3 && is5) value = fizz + buzz;
  console.log(value);
}

for (let index = 1; index <= 100; index++) {
  const fizz = "fizz";
  const buzz = "buzz";
  const is3 = index % 3 === 0;
  const is5 = index % 5 === 0;
  let value = is3 && is5 ? fizz + buzz : is3 ? fizz : is5 ? buzz : index;
  console.log(value);
}
