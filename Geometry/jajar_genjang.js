const prompt = require("prompt-sync")({ sigint: true });
console.log('========================')
console.log("KALKULATOR JAJAR GENJANG");
console.log("========================");
let alas = Number(prompt("Alas : "))
let tinggi = Number(prompt("Tinggi : "))
let sisiMiring = Number(prompt("Sisi Miring : "))
 let luas = alas * tinggi
 let keliling = 2 * (sisiMiring + alas)
console.log(`
    Luas     : ${luas} cm2
    Keliling : ${keliling} cm `)

