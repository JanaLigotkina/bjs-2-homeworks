"use strict";
function solveEquation(a, b, c) {
  let arr = [],
      discriminant = b ** 2 - 4 * a * c;

  if (discriminant === 0) {
    arr.push(-b / 2 * a);
  } else if (discriminant > 0) {
    arr.push((-b - Math.sqrt(discriminant))/ 2 * a);
    arr.push((-b + Math.sqrt(discriminant))/ 2 * a);
  } else {
    arr = [];
  }
  return arr; // array
}


function calculateTotalMortgage(percent, contribution, amount, date) {

  // Проверка на число
  let arr = [percent, contribution, amount];
  let isError = false;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      continue;
    } else if (typeof arr[i] === 'string') {
      arr[i] = Number(arr[i]);
    } else {
      isError = true;
      alert(`Параметр ${arr[i]} содержит неправильное значение ${typeof arr[i]}`);
    }
  }

  if (isError) return;


  // Начинаем подсчеты для формулы
  let totalAmount = 0,
      mouthPay = 0,
      mouthRate = percent / 12 / 100,
      todayDate = new Date(),
      endDate = new Date(date);

  let mouthAmount = Math.abs((todayDate.getMonth() - endDate.getMonth() + (12 * (todayDate.getFullYear() - endDate.getFullYear()))));

  mouthPay = (amount - contribution) * (mouthRate  + (mouthRate / (Math.pow(1 + (mouthRate), mouthAmount) - 1)));
  totalAmount = (mouthPay * mouthAmount).toFixed(2);

  return totalAmount;
}
