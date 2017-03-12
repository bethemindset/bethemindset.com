

/*Generates a random student on button click*/
var buttonClick = document.querySelector('.randomStudentHTML')
buttonClick.addEventListener('click', function(event) {
  var randomStudent = new Student ( makeOpts() )
  console.log(randomStudent)
})

function Student ( opts ) {
  this.name                 = opts.name || 'paul'
  this.homework             = opts.homework || 'default'
  this.quiz                 = opts.quiz || 'default'
  this.exam                 = opts.exam || 'default'
  this.scores               = opts.scores || 'default'
  this.homeworkAverage      = opts.homeworkAverage || 'default'
  this.quizAverage          = opts.quizAverage || 'default'
  this.examAverage          = opts.examAverage || 'default'
  this.classAverage         = opts.classAverage || 'default'
  this.gpa                  = opts.gpa || 'default'
}

function makeOpts(){
  /* Object creation of random student */
  var opts = {}

  /* HOMEWORK */

  opts.homework = []
  //random number from 3-5
  var threeToFive = Math.floor(Math.random() * 3) + 3
  //3-5 grades from 0-100
  while(threeToFive--)
    opts.homework.push(Math.floor(Math.random() * 101))

  /* HOMEWORK AVERAGE */

  opts.homeworkAverage = []

  var total = 0, l = opts.homework.length;
  while(l--)
    total += opts.homework[l]
  opts.homeworkAverage.push(total / opts.homework.length)

  /* QUIZ */

  opts.quiz = []
  //random number from 0-3
  var zeroToThree = Math.floor(Math.random() * 4)
  //0-3 grades from 0-100
  while (zeroToThree--)
    opts.quiz.push(Math.floor(Math.random() * 101))

  /* EXAM */

  opts.exam = []
  //random number from 1-2
  var oneToTwo = Math.floor(Math.random() * 2) + 1
  //1-2 grades from 0-100
  while (oneToTwo--)
    opts.exam.push(Math.floor(Math.random() * 101))

  return opts
}
