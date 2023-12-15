//***1***
// Робота зі змінними
// Оголосіть дві змінні: name та city.
// Присвойте значення "Іван" змінній name.
// Скопіюйте значення зі змінної name в city.
// Виведіть значення змінної city, використовуючи функцію console.log (яка повинна показати “Іван”).

// let name = "Іван";
// let city = "Lviv";
// city = name;
// console.log(city);

//***2***
//Який буде результат виконання скрипта?

//let name = "Olga";
// console.log(`привіт ${1}`); // привіт 1
// console.log(`привіт ${"name"}`); // привіт name
// console.log(`привіт ${name}`); //  привіт Olga

//***3*** //Видобути число зі змінних
// let a = "5";
// let b = "13cvb";
// let c = "12.9sxdcfgv";
// вивести в консоль тип//

//console.log (typeof)
//console.log(typeof Number(a));
//console.log(typeof parseInt(b));
//console.log(typeof parseFloat(c))

//***4***
//Зробіть, щоб 0.1 + 0.2 = 0.3

//console.log((0.1 * 10 + 0.2 * 10) / 10);

//***5**
//Поверніть найбільше число с набору 20, 10, 50, 40

//console.log(math.max(20, 10, 50, 40));

//***6**
//Поверніть випадкове число в діапазоні від 2 до 4
//console.log(Math.random() * (4 - 2) + 2);

//***7**
//дізнатись довжину message
//const message = "Welcome to Bahamas!";
//console.log(messege.length); //19

//***8**
//вивести в консоль message великими літерами
//console.log(message.toUpperCase());

//***9**
// створити пустий об*єкт
// додати туди ім*я, вік і місто
// вивести результат в консоль
// видалити місто
// додати буль з ключем: like flowers // вивести результат в консоль

// let user = {};
// user.name = "Valeria";
// user.age = 32;
// user.city = Lviv;
// console.log(user);
// delete user.city;
// user['like flowers'] = true;
// console.log(user);

//***10**
// За допомогою циклу “for...in” вивести в консоль ключі і значення об*єкта

//for (key in user) {
//    console.log(key);
//    console.log(user[key]);
//}

// МОДУЛЬ 22

//const min = prompt("Введіть хвилину");
//if (min >= 0 && min <= 14) {
// console.log("Перша чверть");
//} else if (min >= 15 && min <= 29) {
//  console.log("Друга чверть");
//} else if (min >= 30 && min <= 44) {
// console.log("Третя чверть");
//} else if (min >= 45 && min <= 59) {
//  console.groupCollapsed("Четверта чверть");
//}

// const value = prompt("Введіть назву товару").toLowerCase();
// let cost;
// switch (value) {
//   case "яблуко":
//     cost = 10;
//     alert(`${value} коштує ${cost} гривень`);
//     break;
//   case "вишня":
//     cost = 50;
//     alert(`${value} коштує ${cost} гривень`);
//     break;
//   case "груша":
//     cost = 45;
//     alert(`${value} коштує ${cost} гривень`);
//     break;
//   default:
//     alert(`Товару ${value}, немає в наявності`);
// }

//Домашнє завдання.
// Якщо змінна більше нуля - виведіть true, менше - false //Перевірте це на варіантах 1, 0, -3.

// let num = 1;
// let num = 0;
// let num = -3;

// if (num > 0) {
//   console.log(true);
// } else if (num < 0) {
//   console.log(false);
// }

// Якщо змінна ="test" - виведіть true, //Перевірте це на варіантах 'test', "qwerty", true

// let name = "test";
// let name = "qwerty";
// let name = "true";

// if (name === "test") {
//   console.log(true);
// }

// Якщо змінна більше 10 - відніміть 5, //менше - додайте 5, результат виведіть в консоль //Перевірте це на варіантах 1, 10, 13.

// let a = 1;
// // let a = 10;
// // let a = 13;

// if (a > 10) {
//   console.log(a - 5);
// }
// if (a < 10) {
//   console.log(a + 5);
// }

//Зробіть сервіс який отримує число від 1 до 12 // виведіть місяць який дорівнює числу

// const value = prompt("Введіть цифру, будь ласка");
// let month;

// switch (value) {
//   case "1":
//     month = "Січень";
//     alert(`${month}`);
//     break;

//   case "2":
//     month = "Лютий";
//     alert(`${month}`);
//     break;

//   case "3":
//     month = "Березень";
//     alert(`${month}`);
//     break;

//   case "4":
//     month = "Квітень";
//     alert(`${month}`);
//     break;
//   case "5":
//     month = "Травень";
//     alert(`${month}`);
//     break;

//   case "6":
//     month = "Червень";
//     alert(`${month}`);
//     break;
//   case "7":
//     month = "Липень";
//     alert(`${month}`);
//     break;
//   case "8":
//     month = "Серпень";
//     alert(`${month}`);
//     break;
//   case "9":
//     month = "Вересень";
//     alert(`${month}`);
//     break;
//   case "10":
//     month = "Жовтень";
//     alert(`${month}`);
//     break;
//   case "11":
//     month = "Листопад";
//     alert(`${month}`);
//     break;
//   case "12":
//     month = "Грудень";
//     alert(`${month}`);
//     break;
//   default:
//     alert(`Неправильно введені данні. Введіть цифру від 1-12`);
// }

//Зробіть сервіс який отримує тризначне число //Поверніть користувачу сумму цих чисел

// const number = prompt("Введіть тризначне число");
// alert((number % 10) + ((number / 10) % 10) + ((number / 100) % 10));
// console.log(number);
