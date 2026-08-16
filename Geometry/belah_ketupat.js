const prompt = require("prompt-sync")({ sigint: true });
console.log('====================')
console.log("KALKULATOR BELAH KETUPAT");
console.log('====================');
let d1 = Number(prompt("Diagonal 1 : "))
let d2 = Number(prompt("Diagonal 2 : "))
let ps = Number(prompt("Panjang Sisi : "))
 let luas = 0.5 * d1 * d2
 let keliling = 4 * ps
console.log(`
    Luas     : ${luas} cm2
    Keliling : ${keliling} cm `)