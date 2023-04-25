// zadanie 1
class prostokat {
  constructor(name, a, b) {
    this.name = name;
    this.a = a;
    this.b = b;
  }

  wypisz() {
    console.log("prostokat o nazwie: " + this.name);
    console.log("bok a wynosi: " + this.a);
    console.log("bok b wynosi: " + this.b);
  }

  obwod() {
    return (this.a + this.b) * 2;
  }

  pole() {
    return this.a * this.b;
  }

  comp(other) {
    if (this.pole() > other.pole()){
      return this.name;
    } else {
      return other.name;
    }
  }
}
const jeden = new prostokat("jeden", 10, 10);
const dwa = new prostokat("dwa", 20, 20);
const trzy = new prostokat("trzy", 30, 30);
jeden.wypisz();
console.log(jeden.pole());
console.log(jeden.obwod());
console.log(jeden.comp(dwa));
