
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
  this.testGrades            = opts.testGrades || 'default'

}

function makeOpts(){
  var opts = {}
  opts.age = []

  var tenToEighteen = Math.floor(Math.random() * 9) + 10
  // 3 to 5 homework grades
  opts.age.push(tenToEighteen)

/* Test Grades */

opts.testGrades = []
   var tenGrades = 10
   //ten grades from 50-100
   while (tenGrades--)
     opts.testGrades.push(Math.floor(Math.random() * 51) + 50 )

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
