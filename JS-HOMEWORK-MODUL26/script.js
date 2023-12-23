// ДОМАШНЕ ЗАВДАННЯ МОДУЛЬ 26

// Створити телефонну книгу
// створити початковий клас Abonent, де зберігатимуться ім*я і номер створити set який прийматиме телефон і номер
// створити get який виводитиме данні про абонента
// створити три різних юзери
// вивести данні

class Abonent {
  constructor(props) {
    this.name = props.name;
    this.tel = props.tel;
  }

  firstName = "";
  lastName = "";
  tel = "";

  set name(newName) {
    const nameRow = newName.split(" ");
    this.firstName = nameRow[0];
    this.lastName = nameRow[1];
  }

  get name() {
    return `Name : ${this.firstName}`;
  }

  get tel() {
    return `Telephone : ${this.tel}`;
  }
}

const Alex = new Abonent({
  name: "Alex Bilov",
  tel: +380974947388,
});

console.log(Alex);

const Julia = new Abonent({
  name: "Julia Moshkarova",
  tel: +380938459955,
});

console.log(Julia);

const Valeria = new Abonent({
  name: "Valeria Romanovska",
  tel: +380986720944,
});

console.log(Valeria);
