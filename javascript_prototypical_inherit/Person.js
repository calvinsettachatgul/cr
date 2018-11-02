
function Person(first, last, age, gender, interests) {
  this.name = {
    first,
    last
  };
  // this.name = {
  //   first: first,
  //   last: last,
  // }
  this.age = age;
  this.gender = gender;
  this.interests = interests;
};

let cal = new Person('cal', 'set', 15, "male", ['cooking'])
// console.log(cal)

let myDateObj = {
  "month": 12,
  "day": 20,
  "year": 1990
}

Person.prototype.assignBirthday = function(birthdayDateObject) {
    this.birthdayMonth = birthdayDateObject.month;
    this.birthdayDay = birthdayDateObject.day;
    this.birthdayYear = birthdayDateObject.year;
}

Person.prototype.greeting = function() {
  console.log('Hi! I\'m ' + this.name.first + '.');
};

function Teacher(first, last, age, gender, interests, subject) {
  Person.call(this, first, last, age, gender, interests);

  this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype);
// Teacher.prototype.constructor = Teacher;

// console.log('Teacher.prototype.constructor')
// console.log('Teacher.prototype.constructor',Teacher.prototype.constructor)
console.log(Teacher.prototype)
console.log(Person.prototype)
// Teacher.prototype
// Person.prototype

cal.assignBirthday(myDateObj);
// console.log(cal)

let firstTeacher = new Teacher("firstname", "lastname", 30, "male", ['reading'], "english")
console.log(firstTeacher.greeting)
console.log(firstTeacher.greeting())
