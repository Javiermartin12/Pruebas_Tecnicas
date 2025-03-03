// test/ejercicio.test.js
const sumar = require("../src/ejercicio"); // Si usas CommonJS
// import { sumar } from '../src/ejercicio'; // Si usas ES Modules

test("sumar 1 + 2 debe ser igual a 3", () => {
  expect(sumar(1, 2)).toBe(3);
});

test("sumar 0 + 0 debe ser igual a 0", () => {
  expect(sumar(0, 0)).toBe(0);
});

test("sumar -1 + 1 debe ser igual a 0", () => {
  expect(sumar(-1, 1)).toBe(0);
});
