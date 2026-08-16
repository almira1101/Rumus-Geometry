const prompt = require("prompt-sync")({ sigint: true});
console.log('================')
console.log("KALKULATOR LIMAS");
console.log('================');
let s = Number(prompt("Sisi Alas : "))
let t = Number(prompt("Tinggi Limas : "))
let ts = Number(prompt("Tinggi Segitiga Tegak : "))
 let lst = 4 * (0.5 * s * ts)
 let l = s * s
 let v = (1 / 3) * l * t
 let lp = l + lst
console.log(`
    Luas Segitiga Tegak : ${lst} cm
    Luas Permukaan      : ${lp} cm2
    Volume              : ${v} cm3
    Luas Alas           : ${l} cm `)