// Задача 1
class PrintEditionItem {

  constructor(name, releaseDate, pagesCount){
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state *= 1.5;
  }

  set state(count) {
    if (count < 0) {
      this.newState = 0;
    } else if (count >= 100) {
      this.newState = 100;
    } else {
      this.newState = count;
    }
  }

  get state() {
    return this.newState;
  }

}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'book';
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'detective';
  }
}


// Задача 2

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    let result = null;

    for (let item = 0; item < this.books.length; item++) {
      if (this.books[item][type] === value) {
        result = item;
        break;
      }
    }

    return result || result == 0 ? this.books[result] : result;
  }

  giveBookByName(bookName) {
    let deleteBook = this.books.findIndex(book => book.name === bookName);

    if(deleteBook === -1) {
        return null;
    } else {
        return this.books.splice([deleteBook], 1)[0];
    }
  }
}


// Задача 3
function Student(name) {
  this.name = name;
}

Student.prototype.addMark = function (mark, subjectName) {
  if (mark >= 1 && mark <= 5) {
    if(!this.marks){
      this.marks = {};
    }

    if (!this.marks[subjectName]) {
      this.marks[subjectName] = [mark];
    } else {
      this.marks[subjectName].push(mark);
    }

  } else {
    console.log("Ошибка, оценка должна быть числом от 1 до 5");
  }
}

Student.prototype.getAverageBySubject = function(subjectName) {
  let sum = 0;

  for (let item of this.marks[subjectName]) {
    sum += item;
  }

  if (!sum) {
    console.log('Несуществующий предмет');
  }
  else {
    console.log(`Средний балл по предмету ${subjectName} ${parseFloat(sum / this.marks[subjectName].length)}`);
    return parseFloat(sum / this.marks[subjectName].length);
  }
}

Student.prototype.getAverage = function () {
  let allMarks = [];
  let sum = 0;

  for (let key in this.marks) {
    allMarks = allMarks.concat(this.marks[key]);
  }

  for (let item of allMarks) {
    sum += item;
  }

  console.log(`Средний балл по всем предметам ${parseFloat(sum / allMarks.length)}`);
  return parseFloat(sum / allMarks.length);
}

Student.prototype.exclude = function (reason) {
  delete this.marks;
  this.excluded = reason;
}
