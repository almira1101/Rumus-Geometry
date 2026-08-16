const prompt = require("prompt-sync")({ sigint: true});
console.log('==================')
console.log("KALKULATOR KERUCUT");
console.log('==================');
let s = Number(prompt("Garis pelukis : "))
let r = Number(prompt("Jari-jari : "))
let t = Number(prompt("Tinggi : "))
let phi;
 if (r % 7 === 0){phi = 22.0/7.0;
 } else {phi = 3.14}
let v = 1.0/3.0 * phi * r * r * t;
let Ls = phi * r * s;
let Lp = phi * r * (r + s);
 console.log(`
    Volume                : ${v} cm3
    Luas Selimut          : ${Ls} cm2
    Luas Permukaan Total  : ${Lp} cm2 `)