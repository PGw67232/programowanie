// zadanie 1

let a = 20;
let b = 10;
let add = a + b;
let sub = a - b;
let mul = a * b;
let div = a / b;

console.log(add);
document.getElementById("add").innerHTML = "wynik działania wynosi: " + add;

console.log(sub);
document.getElementById("sub").innerHTML = "wynik działania wynosi: " + sub;

console.log(mul);
document.getElementById("mul").innerHTML = "wynik działania wynosi: " + mul;

console.log(div);
document.getElementById("div").innerHTML = "wynik działania wynosi: " + div;

// zadanie 2

let x = 3;
let y = 4;
let z = 5;

let p = (x + y + z) / 2;
let P = Math.sqrt(p * (p - x) * (p - y) * (p - z));

console.log(P);
document.getElementById("P").innerHTML = "Pole trójkąta wynosi: " + P;

// zadanie 3

// let L = prompt("podaj liczbę od 1 do 10:");
// let rand = Math.ceil(Math.random() * 10);
//
// console.log("Wylosowana liczba to: " + rand);
// console.log("wybrana liczna to: " + L);
//
// if (rand == L) {
//   document.getElementById("ans").innerHTML = "Brawo!";
// } else {
//   document.getElementById("ans").innerHTML = "Spróbuj jeszcze raz";
// }

// zadanie 4
let l1 = prompt("Podaj liczbę 1: ");
let l2 = prompt("Podaj liczbę 2: ");
let l3 = prompt("Podaj liczbę 2: ");
let max = Math.max(parseFloat(l1), parseFloat(l2), parseFloat(l3));

console.log(max);
document.getElementById("max").innerHTML =
  "najwyższa liczba z podanych to: " + max;
