const prompt = require("prompt-sync")({ sigint: true });
console.log('================================');
console.log("KALKULATOR SEGI TUJUH (HEPTAGON)");
console.log('================================');
let s = Number(prompt("Sisi : "));
let keliling = 7 * s;
let luas = 3.63 * (s * s);
console.log(`
  Keliling : ${keliling} cm
  Luas     : ${luas} cm2`);