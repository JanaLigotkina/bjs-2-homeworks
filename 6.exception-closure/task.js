// Задача 1
function parseCount(num) {
  if (isNaN(Number.parseInt(num))) {
    throw new Error("Невалидное значение");
  }

  return Number.parseInt(num);
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

  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;

    if (this.x + this.y < this.z || this.y + this.z < this.x || this.x + this.z < this.y) {
      throw new Error("Треугольник с такими сторонами не существует");
    }

    this.perimetr = null;
    this.square = null;
  }

  getPerimeter() {
    return this.perimetr = this.x + this.y + this.z;
  }

  getArea() {
    return this.square = Number(Math.sqrt(0.5 * this.perimetr * (0.5 * this.perimetr - this.x) * (0.5 * this.perimetr - this.y) * (0.5 * this.perimetr - this.z)).toFixed(3));
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