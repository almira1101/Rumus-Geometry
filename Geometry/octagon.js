const prompt = require("prompt-sync")({ sigint: true });
console.log('=================================');
console.log("KALKULATOR SEGI DELAPAN (OCTAGON)");
console.log('=================================');
let s = Number(prompt("Sisi : "));
let keliling = 8 * s;
let luas = 4.83 * (s * s);
console.log(`
  Keliling : ${keliling} cm
  Luas     : ${luas} cm2`);