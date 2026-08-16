const prompt = require("prompt-sync")({ sigint: true });
console.log('===================')
console.log("KALKULATOR SEGITIGA");
console.log('===================');
let alas = Number(prompt("Alas : "))
let tinggi = Number(prompt("Tinggi : "))
console.log('===================')
let sisiA = Number(prompt("Sisi a : "))
let sisiB = Number(prompt("Sisi b : "))
let sisiC = Number(prompt("Sisi c : "))
 let luas = 0.5 * alas * tinggi
 let keliling = sisiA + sisiB + sisiC
console.log(`
 Luas     : ${luas} cm2
 Keliling : ${keliling} cm`)