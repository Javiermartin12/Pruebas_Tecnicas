/**
 * 📝 Ejercicio: Palíndromos
 *
 * 📌 Descripción:
 * Crea una función `esPalindromo` que determine si una cadena de texto es un palíndromo.
 * Un palíndromo es una palabra o frase que se lee igual de izquierda a derecha que de derecha a izquierda.
 *
 * 🔹 Requisitos:
 * 1. La función debe ignorar mayúsculas y minúsculas.
 * 2. La función debe ignorar espacios en blanco.
 * 3. La función debe devolver `true` si la cadena es un palíndromo y `false` si no lo es.
 *
 * 🧪 Ejemplos:
 * esPalindromo("reconocer") // true
 * esPalindromo("oso") // true
 * esPalindromo("javascript") // false
 * esPalindromo("Anita lava la tina") // true
 *
 * 📌 Pista: Puedes utilizar `.toLowerCase()`, `.replace()`, `.split()`, `.reverse()`, y `.join()`
 *
 * 🚀 ¡Buena suerte!
 */

function esPalindromo(word) {
  word = "";
  if (word.toUppercase()) {
    word.value = word.toLoweCase();
    
  }
}
