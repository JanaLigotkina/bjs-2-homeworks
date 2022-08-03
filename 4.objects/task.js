function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

const student1 = new Student('Roman', 'male', 20);
const student2 = new Student('Alex', 'male', 18);
const student3 = new Student('Kate', 'female', 21);
const student4 = new Student('Jane', 'female', 18);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined){
    this.marks = [mark];
    } else {
      this.marks.push(mark);
    }
}

Student.prototype.addMarks = function (...args) {
  if(this.marks === undefined){
    this.marks = [...args];
    } else {
      this.marks.push(...args);
    }
}

Student.prototype.getAverage = function () {
  let sum = 0;

  for (let item of this.marks) {
    sum += item;
  }

  return sum / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
