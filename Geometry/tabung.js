const prompt = require("prompt-sync")({ sigint: true});
console.log('=================')
console.log("KALKULATOR TABUNG");
console.log('=================');
let r = Number(prompt("Jai-jari : "))
let d = Number(prompt("Diameter : "))
let t = Number(prompt("Tinggi tabung : "))
let phi;
 if (r % 7 === 0){phi = 22.0/7.0;
 } else {phi = 3.14}
let v = phi * r * r * t
let Ls = 2 * phi * r * t
let Lp = 2 * phi * r * (r + t)
let Lt = phi * r * (r + 2 * t)
let La = phi * r * r
 console.log(`
    Volume                    : ${v} cm3
    Luas Selimut              : ${Ls} cm2
    Luas Permukaan Total      : ${Lp} cm2
    Luas Permukaa Tanpa Tutup : ${Lt} cm2
    Luas Alas                 : ${La} cm2 `)
