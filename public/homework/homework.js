/* Object creation of random student */
function Student(name, homework, quiz, exam, scores, homeworkAverage, quizAverage, examAverage, classAverage, gpa) {
  this.name                 = name
  this.homework             = homework;
  this.quiz                 = quiz;
  this.exam                 = exam
  this.scores               = scores
  this.homeworkAverage      = homeworkAverage
  this.quizAverage          = quizAverage
  this.examAverage          = examAverage
  this.classAverage         = classAverage
  this.gpa                  = gpa
}

/*Generates a random student on button click*/
var buttonClick = document.querySelector('.randomStudentHTML')
buttonClick.addEventListener('click', function(event) {
  var randomStudent = new Student("RandomName", homework, quiz, exam, scores, homeworkAverage)
  console.log(randomStudent)
})

/* HOMEWORK */

homework = []
//random number from 3-5
var threeToFive = Math.floor(Math.random() * 3) + 3
//3-5 grades from 0-100
  for (var i = 0; i < threeToFive; i++) {
    homework.push(Math.floor(Math.random() * 101))
  }

/* HOMEWORK AVERAGE */

homeworkAverage = []

var total = 0;
for(var i = 0; i < homework.length; i++) {
    total += homework[i];
}
var homeworkAvg = total / homework.length;
homeworkAverage.push(homeworkAvg)

/* QUIZ */

quiz = []
//random number from 0-3
var zeroToThree = Math.floor(Math.random() * 4)
//0-3 grades from 0-100
  for (var i = 0; i < zeroToThree; i++) {
    quiz.push(Math.floor(Math.random() * 101))
}

/* EXAM */

exam = []
//random number from 1-2
var oneToTwo = Math.floor(Math.random() * 2) + 1
//1-2 grades from 0-100
  for (var i = 0; i < oneToTwo; i++) {
    exam.push(Math.floor(Math.random() * 101))
}
