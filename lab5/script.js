// zadanie 1
function tabliczka() {
    document.write("<table border='1px'>");
    for (i = 1; i <= 10; i++) {
        document.write("<tr><td>" + i + "</td>");
        for (j = 1; j <= 9; j++) {
            if (j != 1) {
                document.write("<td>" + i * j + "</td>");
            }
        }
        document.write("</tr>");
    }
    document.write("</table>");
}

// zadanie 2
let names = ["Piotr", "Jan", "Jakub", "Maciej", "Kacper", "Kamil"];
let surnames = ["Bieszczad", "Grabarz", "Środa", "Babiarz", "Kowalski", "Leśniewski"];
function rand_pers() {
    let recordsNumber = prompt("Podaj ilość rekordów do wygenerowania:");
    let dataArray = [];
    for (let i = 0; i < recordsNumber; i++) {
        let phoneNumber = (Math.floor(Math.random() * 900000000) + 500000000).toString();
        let age = Math.floor(Math.random() * (80 - 18 + 1)) + 18;
        let nameIndex = Math.floor(Math.random() * names.length);
        let surnameIndex = Math.floor(Math.random() * surnames.length);
        dataArray.push({
            name: names[nameIndex],
            surname: surnames[surnameIndex],
            age: age,
            phone: phoneNumber
        });
    }
    document.write("<table><tr><th>Imię</th><th>Nazwisko</th><th>Wiek</th><th>Numer telefonu</th></tr>");
    for (let i = 0; i < dataArray.length; i++) {
        document.write("<tr><td>" + dataArray[i].name + "</td><td>" + dataArray[i].surname + "</td><td>" + dataArray[i].age + "</td><td>" + dataArray[i].phone + "</td></tr>");
    }
    document.write("</table>");
}
