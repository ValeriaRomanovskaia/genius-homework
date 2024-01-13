// ДОМАШНЕ ЗАВДАННЯ МОДУЛЬ 32

// -----1----
// Напишіть функцію printNumbers(from, to) яка виводить число кожну секунду,
// починаючи від from і закінчуючи to. Зробіть два варіанти рішення. Використовуючи setInterval. Використовуючи вкладений setTimeout

// function printNumbers(from, to) {
//   let number = from;

//   let timerId = setInterval(function () {
//     alert(number);
//     if (number == to) {
//       clearInterval(timerId);
//     }
//     number++;
//   }, 1000);
// }

// printNumbers(0, 7);

// ------------------------------

// function printNumbers(from, to) {
//   let number = from;

//   setTimeout(function go() {
//     alert(number);
//     if (number < to) {
//       setTimeout(go, 1000);
//     }
//     number++;
//   }, 1000);
// }

// printNumbers(0, 7);

// -----2----
// Вбудована функція setTimeout використовує колбек-функції. Створіть
// альтернативу яка базується на промісах.
// Функція delay(ms) повинна повертати проміс, який перейде в стан resolved через ms мілісекунд, так щоб ми могли додати до нього .then:
// function delay(ms) {
// // ваш код
// }delay(3000).then(() => alert('виконалось через 3 секунди'));

// function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }
// delay(3000).then(() => alert("виконалось через 3 секунди"));
