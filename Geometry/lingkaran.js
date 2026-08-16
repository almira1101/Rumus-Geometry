const prompt = require("prompt-sync")({ sigint: true });
console.log('====================')
console.log("KALKULATOR LINGKARAN");
console.log('====================');
let phi;
 if (r % 7 === 0){phi = 22.0/7.0;
 } else {phi = 3.14}
let r = Number(prompt("Jari-jari : "))
let d = Number(prompt("Diameter : "))
 let luas = phi * r * r
 let keliling = phi * d
console.log(`
    Luas     : ${luas} cm2 
    Keliling : ${keliling} cm `)