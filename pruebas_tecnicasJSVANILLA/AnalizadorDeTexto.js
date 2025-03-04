// Ejercicio 1 (JavaScript): Analizador de Texto
// Escribe una función en JavaScript que reciba un texto y devuelva un objeto con la siguiente información:

// Número total de caracteres. SI
// Número total de palabras. SI
// Número total de vocales y consonantes. SI
// La palabra más larga.

// {
//     totalCharacters: 25,
//     totalWords: 5,
//     vowels: 7,
//     consonants: 10,
//     longestWord: "Hello"
//   }

// Requisitos:

// Usar split(), filter(), reduce() o cualquier otro método funcional.
// Manejar cadenas vacías o sin palabras.
// Considerar mayúsculas y minúsculas.

function textAnalizer(text) {
  let vocales = 0;
  let caracteres = 0;
  let consonantes = 0;
  let palabraMasLarga = "";
  let palabras = 0;
  const arraySeparado = text.split(/\s+/);
  const palabrasArray = text.split(/\s+/);
  palabras = palabrasArray.length;

  for (let i = 0; i < arraySeparado.length; i++) {
    if (arraySeparado[i].length > palabraMasLarga.length) {
      palabraMasLarga = arraySeparado[i];
    }
  }
  for (let i = 0; i < text.length; i++) {
    if (text[i].match(/^[a-zA-Z]+$/)) {
      caracteres++;
    }
    if (text[i].match(/[^qwrtypsdfghjklñzxcvbnm]/i)) {
      vocales++;
    }
    if (text[i].match(/[^aeiou]/i)) {
      consonantes++;
    }
  }
  return console.log(
    `Número de vocales: ${vocales}, Número de consonantes: ${consonantes}, Número de caracteres: ${caracteres}, Número de palabras: ${palabras}, La palabra mas larga ${palabraMasLarga}`
  );
}
textAnalizer("text analizer test");
