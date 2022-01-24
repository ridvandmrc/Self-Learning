function Person(number, name, surname) {
  this.name = name;
  this.number = number;
  this.surname = surname;
}

const person = new Person(123, "ali", "Demirci");
Person.prototype.getName = function () {
  return `Name: ${this.name}, Surname: ${this.surname}`;
};
console.log(person.getName());

function Student(school, grade) {
  this.school = school;
  this.grade = grade;
}

Student.prototype = Person.prototype;
const student = new Student("Cambridge", "3rd");
student.name = person;

console.log(student.name);
