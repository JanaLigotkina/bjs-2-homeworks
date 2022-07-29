// Задание 1
function getArrayParams(arr) {
  let min = arr[0],
      max = arr[0],
      sum = 0,
      avg = 0;

  for (let i of arr) {
    if (min > i) {
      min = i;
    }

    if (max < i) {
      max = i;
    }
    sum += i;
  }

  avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

// Задание 2

function worker(array) {
  let sum = 0;
  for (let i of array) {
    sum += i;
  }

  return sum;
}

function makeWork(arrOfArr, worker) {
  let max = worker(arrOfArr[0]);

  for (let i of arrOfArr) {
    if (max < worker(i)) {
      max = worker(i);
    }
  }

  return max;
}


// Задание 3
function worker2(arr) {
  let max = arr[0],
      min = arr[0];

  for (let i of arr) {
    if (min > i) {
      min = i;
    }

    if (max < i) {
      max = i;
    }
  }

  return Math.abs(max - min);
}
