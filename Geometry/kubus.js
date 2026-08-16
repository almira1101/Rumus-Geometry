const prompt = require("prompt-sync")({ sigint: true});
console.log('================')
console.log("KALKULATOR KUBUS");
console.log('================');
let s = Number(prompt("Sisi : "))
 let lp = 6 * ( s * s )
 let v = s * s * s
 let k = 12 * s
console.log(`
    Luas Permukaan      : ${lp} cm2 
    Volume              : ${v} cm3 
    Total Panjang Rusuk : ${k} cm`)