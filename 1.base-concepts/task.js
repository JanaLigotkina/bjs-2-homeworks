"use strict";
function solveEquation(a, b, c) {
  let arr = [],
      discriminant = b ** 2 - 4 * a * c;

  if (discriminant === 0) {
    arr.push(-b / 2 * a);
  } else if (discriminant > 0) {
    arr.push((-b + Math.sqrt(discriminant)) / 2 * a, (-b - Math.sqrt(discriminant)) / 2 * a);
  } else {
    arr = [];
  }
  return arr; // array
}


function calculateTotalMortgage(percent, contribution, amount, date) {

  // Проверка на числа

  if (Number.isNaN(parseInt(percent))) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  }

  if (Number.isNaN(parseInt(contribution))) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  }

  if (Number.isNaN(parseInt(amount))) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }

  let arr = [percent, contribution, amount];

  for (let i = 0; i < arr.length; i++) {
    arr[i] = parseInt(arr[i]);
  }

  // Начинаем подсчеты для формулы
  let totalAmount = 0,
      mouthPay = 0,
      mouthRate = percent / 12 / 100,
      todayDate = new Date(),
      endDate = new Date(date);

  let mouthAmount = Math.abs((todayDate.getMonth() - endDate.getMonth() + (12 * (todayDate.getFullYear() - endDate.getFullYear()))));

  mouthPay = (amount - contribution) * (mouthRate  + (mouthRate / (Math.pow(1 + (mouthRate), mouthAmount) - 1)));
  totalAmount = Number((mouthPay * mouthAmount).toFixed(2));

  return totalAmount;
}
