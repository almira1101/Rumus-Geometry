const prompt = require("prompt-sync")({ sigint: true });
console.log('====================')
console.log("KALKULATOR TRAPESIUM");
console.log('====================');
let atas = Number(prompt("Sisi Atas : "))
let bawah = Number(prompt("Sisi Bawah : "))
let tinggi = Number(prompt("Tinggi : "))
let sisi1 = Number(prompt("Sisi Miring 1 : "))
let sisi2 = Number(prompt("Sisi Miring 2 : "))
 let luas = 0.5 * (atas + bawah) * tinggi
 let keliling = atas + bawah + sisi1 + sisi2
console.log(`
    Luas     : ${luas} cm2
    Keliling : ${keliling} cm`)