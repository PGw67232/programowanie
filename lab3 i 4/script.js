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

let pp = (x + y + z) / 2;
let P = Math.sqrt(pp * (pp - x) * (pp - y) * (pp - z));

console.log(P);
document.getElementById("P").innerHTML = "Pole trójkąta wynosi: " + P;

// zadanie 3
//
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
//
// let l1 = prompt("Podaj liczbę 1: ");
// let l2 = prompt("Podaj liczbę 2: ");
// let l3 = prompt("Podaj liczbę 2: ");
// let max = Math.max(parseFloat(l1), parseFloat(l2), parseFloat(l3));
//
// console.log(max);
// document.getElementById("max").innerHTML =
//   "najwyższa liczba z podanych to: " + max;
//
// //Zadanie 5
//
// let p = parseFloat(prompt("Podaj 1 liczbę do sprawdzenia NWD: "));
// let q = parseFloat(prompt("Podaj 2 liczbę do sprawdzenia NWD: "));
//
// function nwd(p, q) {
//   if (q == 0) return p;
//   return nwd(q, p % q);
// }
//
// let wynik = nwd(p, q);
// console.log("NWD(" + p + "," + q + ") = " + wynik);
//
// document.getElementById("NWD").innerHTML =
//   "Najwiekszy wspolny dzielnik z " + p + ", " + q + " = " + wynik;

//Zadanie 6

const student1 = {
  name: "Adam",
  surname: "Małysz",
  age: 22,
};

const student2 = {
  name: "Krzysztof",
  surname: "Krawczyk",
  age: 20,
};

const student3 = {
  name: "Mariusz",
  surname: "Pudzianowski",
  age: 25,
};

student1.subject = "Skoczek";
student2.subject = "Piosenkarz";
student3.subject = "Strongman";

//zadanie 7

function submit() {
  const name = document.getElementById("Imie").value;
  const surname = document.getElementById("Nazwisko").value;
  const age = document.getElementById("Wiek").value;
  const subject = document.getElementById("Temat").value;

  const student = {
    name: name,
    surname: surname,
    age: age,
    subject: subject,
  };
  const StudentData = `Imie: ${student.name}<br>Nazwisko: ${student.surname}<br>Wiek: ${student.age}<br>Temat: ${student.subject}`;
  document.getElementById("StudentData").innerHTML = StudentData;
  document.getElementById("Imie").innerHTML = student.name;
  document.getElementById("Nazwisko").innerHTML = student.surname;
  document.getElementById("Wiek").innerHTML = student.age;
  document.getElementById("Temat").innerHTML = student.subject;
}
