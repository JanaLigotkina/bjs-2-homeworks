// Задача 1
function parseCount(num) {
  let parseNum = Number.parseInt(num);
  if (isNaN(parseNum)) {
    throw new Error("Невалидное значение");
  }

  return parseNum;
}

function validateCount(num) {
  try {
    return parseCount(num);
  } catch(error) {
    return error;
  }
}

// Задача 2
class Triangle {

  perimeter = null;
  square = null;

  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;

    if (x + y < z || y + z < x || x + z < y) {
      throw new Error("Треугольник с такими сторонами не существует");
    }

    this.perimeter = this.getPerimeter();
    this.square = this.getArea();
  }

  getPerimeter() {
    return this.x + this.y + this.z;
  }

  getArea() {
    let halfPerimeter = 0.5 * this.perimeter;
    return Number(Math.sqrt(halfPerimeter * (halfPerimeter - this.x) * (halfPerimeter - this.y) * (halfPerimeter - this.z)).toFixed(3));
  }
}

function getTriangle(x, y, z) {
  try {
    return new Triangle(x, y, z);
  } catch(error) {
    return {
      getArea: () => "Ошибка! Треугольник не существует",
      getPerimeter: () => "Ошибка! Треугольник не существует"
    }
  }
}