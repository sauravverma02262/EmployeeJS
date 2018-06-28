var employeeList = []
var employee = {
  firstname: '',
  lastname: '',
  email: '',
  age: '',
  projects: [],
  tasks:[]
}
var ids = ['firstname', 'lastname', 'email', 'age']


var displayEmployees = document.getElementById('employeeList')
function displayEmployeeList () {
  if(employeeList.length === 0) {
    displayEmployees.innerHTML = "<h1>No Employee found. Add your first Employee...</h1>"
  } else {
    var table = '<table><tr><th>First Name</th><th>Last Name</th><th>Age</th><th>E-mail</th></tr>'
    var tempEmplist = employeeList
    tempEmplist.map((employee, index) => 
      table +="<tr>"
        +"<td>"+employee.firstname+"</td>"
        +"<td>"+employee.lastname+"</td>"
        +"<td>"+employee.age+"</td>"
        +"<td>"+employee.email+"</td>"
        +"</tr>"
      )
    displayEmployees.innerHTML = table +="</table>"
  }
  
}
function reset() {
  employee = {
    firstname: '',
    lastname: '',
    email: '',
    age: '',
    projects: [],
    tasks:[]
  }
  for(var i = 0; i< ids.length; i++) {
    document.getElementById(ids[i]).value = ''
  }
  displayEmployeeList()
}

function addEmployee (key, value) {
  if (key === 'submit') {
    employeeList.push(employee)
    reset()
  } else {
    employee[key] = value
  }
}

reset()