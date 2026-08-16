const prompt = require("prompt-sync")({ sigint: true });
console.log('===============================');
console.log("KALKULATOR SEGI LIMA (PENTAGON)");
console.log('===============================');
let s = Number(prompt("Sisi : "));
let keliling = 5 * s;
let luas = 1.72 * (s * s);
console.log(`
  Keliling : ${keliling} cm
  Luas     : ${luas} cm2`);