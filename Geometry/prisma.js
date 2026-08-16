const prompt = require("prompt-sync")({ sigint: true});
console.log('=================')
console.log("KALKULATOR PRISMA");
console.log('=================');
let tp = Number(prompt("Tinggi Prisma : "))
let a = Number(prompt("Alas : "))
let ta = Number(prompt("Tinggi Segitiga : "))
let sm = Number(prompt("Sisi Miring : "))
 let l = 0.5 * a * ta 
 let k = a + ta + sm
 let v = l * tp
 let lp = (2*l) + (k*tp)
console.log(`
    Luas Alas         : ${l} cm2
    Keliling Alas     : ${k} cm
    Volume            : ${v} cm3
    Luas Permukaan    : ${lp} cm2 `)