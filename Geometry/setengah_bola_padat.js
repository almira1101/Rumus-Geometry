const prompt = require("prompt-sync")({ sigint: true});
console.log('==============================');
console.log("KALKULATOR SETENGAH BOLA PADAT");
console.log('==============================');
let r = Number(prompt("Jari-jari : "))
let phi;
 if (r % 7 === 0){phi = 22.0/7.0;
 } else {phi = 3.14}
let v = 0.2/0.3 * phi * r * r * r
let lp = 3 * phi * r * r
console.log(`
    Volume         : ${v} cm3
    Luas Permukaan : ${lp} cm2`);