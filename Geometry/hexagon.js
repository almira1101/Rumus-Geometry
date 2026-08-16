const prompt = require("prompt-sync")({ sigint: true });
console.log('==============================');
console.log("KALKULATOR SEGI ENAM (HEXAGON)");
console.log('==============================');
let s = Number(prompt( "Sisi : "));
let keliling = 6 * s;
let luas = 1.73 * (s * s);
console.log(`
  Keliling : ${keliling} cm
  Luas     : ${luas} cm2`);