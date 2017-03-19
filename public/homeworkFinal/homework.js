
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
  this.name            = opts.name || 'default'
  this.age             = opts.age || 'default'
  this.grades          = opts.grades || 'default'
  this.quiz            = opts.quiz || 'default'

}

function makeOpts(){
  /* Object creation of random student */

    /*      Homework    */
  var opts = {}

  opts.age = []

  var threeToFive = Math.floor(Math.random() + 1)
  // 3 to 5 homework grades
  while(threeToFive--) {
      opts.age.push(Math.floor(Math.random() * 50))
  }

/* QUIZ */

opts.quiz = []
   var tenGrades = 10
   //ten grades from 50-100
   while (tenGrades--)
     opts.quiz.push(Math.floor(Math.random() * 50) + 50 )

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
