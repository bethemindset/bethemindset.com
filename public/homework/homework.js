const quiz = Math.floor(Math.random() * 4)

var buttonClick = document.querySelector('.randomStudentHTML')
buttonClick.addEventListener('click', function(event) {
  var randomStudent = new Student('name', quiz);
  console.log(randomStudent)
})

function Student(name, quiz, grade, gpa) {
  this.name = name;
  this.quiz = quiz;
  this.grade = grade
  this.gpa = gpa
}

var randomStudent = new Student('name', quiz);
console.log(randomStudent)
