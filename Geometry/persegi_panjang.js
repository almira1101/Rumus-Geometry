const prompt = require("prompt-sync")({ sigint: true });
console.log('==========================')
console.log("KALKULATOR PERSEGI PANJANG");
console.log('==========================');
let P = Number(prompt("Panjang : "))
let L = Number(prompt("Lebar : "))
let luas = P * L
let keliling = 2 * P + L
console.log(`
 Luas     : ${luas} cm2
 Keliling : ${keliling} cm`)
