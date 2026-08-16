const prompt = require("prompt-sync")({ sigint: true});
console.log('================')
console.log("KALKULATOR BALOK");
console.log('================');
let p = Number(prompt("Panjang : "))
let l = Number(prompt("Lebar : "))
let t = Number(prompt("Tinggi : "))
 let v = p * l * t
 let lp = 2 * ( p * l + p * t + l * t)
 let k = 4 * ( p + l + t)
console.log(`
    volume              : ${v} cm3 
    Luas Permukaan      : ${lp} cm2
    Total Panjang Rusuk : ${k} cm `)