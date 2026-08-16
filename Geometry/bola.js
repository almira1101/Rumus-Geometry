const prompt = require("prompt-sync")({ sigint: true });
console.log('===============')
console.log("KALKULATOR BOLA");
console.log("===============");
let r = Number(prompt("Jari-jari : "))
let phi;
 if (r % 7 === 0){phi = 22.0/7.0;
 } else {phi = 3.14}
let v = 4.0/3.0 * phi * r * r * r
let l = 4 * phi * r * r
console.log(`
    Volume         : ${v} cm3
    Luas Permukaan : ${l} cm2`);
    