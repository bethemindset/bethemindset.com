
/*Generates a random student on button click*/
var buttonClick = document.querySelector('.randomStudentHTML')
buttonClick.addEventListener('click', function(event) {
  var randomStudent = new Student ( makeOpts() )
  var tr = document.createElement('tr')
  for (var i in randomStudent) {
    var td = document.createElement('td')
    td.textContent = randomStudent[i]
    tr.append(td)
  }
  document
    .querySelector('tbody')
    .append(tr)
})

function Student ( opts ) {
  this.name                 = opts.name || 'default'
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

    /*      Homework    */
  var opts = {}

  opts.homework = []

  var threeToFive = Math.floor(Math.random() * 3) + 3
  // 3 to 5 homework grades
  while(threeToFive--) {
      opts.homework.push(Math.floor(Math.random() * 101))
  }
  /*      Homework Average   */
  opts.homeworkAverage = []

  var total = 0
<<<<<<< HEAD
  var l = opts.homework.length;
=======
  var l = opts.homework.length
>>>>>>> d22481f2fb610693661d6a62ed7c06372a8acb10
  while(l--)
    total += opts.homework[l]
  opts.homeworkAverage.push(total / opts.homework.length)

<<<<<<< HEAD
  /* QUIZ */

  opts.quiz = []
  //random number from 0-3
  var zeroToThree = Math.floor(Math.random() * 4)
  //0-3 grades from 0-100
  while (zeroToThree--)
    opts.quiz.push(Math.floor(Math.random() * 101))

  /* QUIZ AVERAGE */
  opts.quizAverage = []

  var quizTotal = 0
  var q = opts.quiz.length;
  while(q--)
    quizTotal += opts.quiz[q]
  opts.quizAverage.push(quizTotal / opts.quiz.length)

  // CODE HERE

  /* EXAM */

  opts.exam = []


  //random number from 1-2
  var oneToTwo = Math.floor(Math.random() * 2) + 1
  //1-2 grades from 0-100
  while (oneToTwo--)
    opts.exam.push(Math.floor(Math.random() * 101))

  /* EXAM AVERAGE */

  // CODE HERE

=======
//Quiz//
opts.quiz = []
var zeroToThree = Math.floor(Math.random() * 3) + 1
    //0-3
    while (zeroToThree--) {
        opts.quiz.push(Math.floor(Math.random() * 101))
    }

    opts.quizAverage = []

    var quizTotal = 0
    var f = opts.quizAverage.length
    while(f--)
      total += opts.quiz[f]
    opts.quizAverage.push(total / opts.quiz.length)
//exams
opts.exam = []
var zeroToTwo = Math.floor(Math.random() * 3) + 0
    //0-3
    while (zeroToTwo--) {
        opts.exam.push(Math.floor(Math.random() * 80))
    }
>>>>>>> d22481f2fb610693661d6a62ed7c06372a8acb10

  opts.name = makeName()
  console.log(opts)
  return opts
}

function makeName () {
  var nameBank = [
    'William','Mason','Noah','James','Elijah','Aiden','Ethan','Bentley','Jackson','Liam',
    'Emma','Ava','Olivia','Madison','Isabella','Sophia','Elizabeth','Brooklyn','Chloe','Ella',
    'Santiago','Mateo','Matías','Diego','Sebastián','Nicolás','Miguel','Angel','Iker','Alejandro','Samuel',
    'Emma', 'Marie', 'Petra', 'Victoria', 'Leah', 'Anna'
  ]
  return nameBank[ Math.floor(Math.random() * nameBank.length) ]
}
