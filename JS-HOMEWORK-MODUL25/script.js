// ДОМАШНЕ ЗАВДАННЯ МОДУЛЬ 25

// --1--
// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind

// const infoStudent = {
//   name: "Valeria",
//   speciality: "Marketing",
//   mark: "100",
//   missed: "2",
//   showInfo: function () {
//     console.log(
//       "Student: " +
//         this.name +
//         " speciality: " +
//         this.speciality +
//         " mark: " +
//         this.mark +
//         " missed: " +
//         this.missed
//     );
//   },
// };

// infoStudent.showInfo();

// student2 = {
//   name: "Vlada",
//   speciality: "Adwertising",
//   mark: "99",
//   missed: "3",
// };

// student3 = {
//   name: "Olga",
//   speciality: "Pr",
//   mark: "87",
//   missed: "5",
// };

// infoStudent.showInfo.bind(student2)();
// infoStudent.showInfo.bind(student3)();

// infoStudent.showInfo.call(student2);
// infoStudent.showInfo.call(student3);

// infoStudent.showInfo.apply(student2);
// infoStudent.showInfo.apply(student3);

// -----------------------------------------------

// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке при натисканні на кнопку css - має видати коротке визначення що це таке

// const button = {
//   showInfo() {
//     console.log(this.info);
//   },
// };

// const html = {
//   info: [
//     "HTML (от англ. HyperText Markup Language — «язык гипертекстовой разметки») — стандартизированный язык гипертекстовой разметки документов для просмотра веб-страниц в браузере.",
//   ],
// };

// const css = {
//   info: [
//     "CSS (англ. Cascading Style Sheets — каскадные таблицы стилей) — технология описания внешнего вида документа, преимущественно использующаяся как средство оформления веб-страниц.",
//   ],
// };

// document
//   .querySelector("#html")
//   .addEventListener("click", button.showInfo.bind(html));

// document
//   .querySelector("#css")
//   .addEventListener("click", button.showInfo.bind(css));

// -----------------------------------------------------

//  --3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару функція має повертати назву товару і вартість
// перевірити на варіантах: 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) jrange 89. 3,4

// НЕ ЗРОЗУМІЛА ЯК ВИКОНАТИ ПЕРЕВІД В ЦІФРУ І МНОЖЕННЯ

// let cost = parseFloat(price) * parseFloat(weight);

// const infoProduct = {
//   name: "banana",
//   price: "30",
//   weight: "4,5",

//   showInfo: function () {
//     console.log("Product: " + this.name + " Cost: ");
//   },
// };

// cost = parseFloat(price) * parseFloat(weight);
// infoProduct.showInfo();
