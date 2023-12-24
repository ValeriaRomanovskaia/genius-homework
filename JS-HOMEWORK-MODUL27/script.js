// ДОМАШНЯ РОБОТА МОДУЛЬ 27

// Створіть функцію-конструктор Calculator, який створює об’єкти з трьома методами:
// read() запитує два значення за допомогою prompt і запам’ятовує їх у властивостях об’єкта.
// sum() повертає суму цих властивостей.
// mul() повертає результат множення даних властивостей.


let Calculator() {
  
  read = function() {
    this.a = +prompt('Введіть перше число');
    this.b = +prompt('Введіть друге число');
  };

  sum = () {
    return this.a + this.b;
  };

  mul = function() {
    return this.a * this.b;
  };
};

Calculator.read();
alert(Calculator.sum());
alert(Calculator.mul());
