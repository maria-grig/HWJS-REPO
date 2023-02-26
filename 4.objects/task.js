function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

let student1 = new Student ("Roman", "male", 21);
let student2 = new Student ("Svetlana", "female", 19);

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

Student.prototype.addMarks = function (...mark) {
  if(this.marks === undefined){
    this.marks = [...mark];
  } else {
    this.marks.push(...mark);
  }
}

Student.prototype.getAverage =  function () {
  if (this.marks.length == 0){
    return 0;
  }
  let sum = this.marks.reduce((prev, curr) => prev + curr);
  return sum / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
 }