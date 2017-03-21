
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
  this.testGrades      = opts.testGrades || 'default'

}

function makeOpts(){
  var opts = {}

/* Random age generator from 10 - 18 */

  opts.age = []
  var tenToEighteen = Math.floor(Math.random() * 9) + 10
  opts.age.push(tenToEighteen)

/* Test Grades */

opts.testGrades = []
   var tenGrades = 10
   //ten grades from 50-100
   while (tenGrades--)
     opts.testGrades.push(Math.floor(Math.random() * 51) + 50 )

  opts.name = document.getElementById("uniqueID").value

  var total = 0;
  for(var i = 0; i < opts.testGrades.length; i++) {
      total += opts.testGrades[i];
  }
  var avg = total / opts.testGrades.length;

/* Second table */

if ( avg > 80 ) {

var tr = document.createElement('tr')
var td = document.createElement('td')
td.textContent = document.querySelector("#uniqueID").value
tr.append(td)
td = document.createElement('td')
td.textContent = avg
tr.append(td)
document
  .querySelector('.rwd-tbody-o75')
  .append(tr)

}

/* Third table */

if (opts.age > 15) {

  var tr = document.createElement('tr')
  var td = document.createElement('td')
  td.textContent = document.querySelector("#uniqueID").value
  tr.append(td)
  td = document.createElement('td')
  td.textContent = opts.age
  tr.append(td)
  document
    .querySelector('.rwd-tbody-over15')
    .append(tr)

}

  return opts
}
