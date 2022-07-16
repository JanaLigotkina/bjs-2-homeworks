// Задание 1
function getArrayParams(arr) {
  let min = arr[0],
      max = arr[0],
      sum = 0,
      avg = 0;

  for (let i in arr) {
    if (min > arr[i]) {
      min = arr[i];
    }

    if (max < arr[i]) {
      max = arr[i];
    }
    sum += arr[i];
  }

  avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

// Задание 2

function worker(arr) {
  let sum = [];
  let sumTemporary;

  for (let i in arr) {
    sumTemporary = 0;
    for (let j in arr[i]) {
      sumTemporary += arr[i][j];
    }
    sum.push(sumTemporary);
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;
  let arrSum = func(arrOfArr);

  for (let i in arrSum) {
    if (max < arrSum[i]) {
      max = arrSum[i];
    }
  }

  return max;
}


// Задание 3
function worker2(arr) {
//   let max = arr[0],
//       min = arr[0];

//   for (let i in arr) {
//     if (max < arr[i]) {
//       max = arr[i];
//     }

//     if (min > arr[i]) {
//       min = arr[i];
//     }
//   }

//   return Math.abs(max - min);

let arr = [];

  for (let i in arr) {

    for (let j in arr[i]) {
      let max = arr[0][0],
          min = arr[0][0];
      sumTemporary += arr[i][j];
    }
    sum.push(sumTemporary);
  }

  return sum;


}
