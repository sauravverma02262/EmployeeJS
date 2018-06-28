var employeeList = []
document.getElementById('update').style.display = 'none'
var employee = {
  id: Math.floor(Math.random() * 10000000000) + 1,
  firstname: '',
  lastname: '',
  email: '',
  age: '',
  projects: [],
  tasks:[]
}
var ids = ['firstname', 'lastname', 'email', 'age']


var displayEmployees = document.getElementById('employeeList')
var empCount = document.getElementById('empCount')

function displayEmployeeList () {
  if(employeeList.length === 0) {
    displayEmployees.innerHTML = "<h1>No Employee found. Add your first Employee...</h1>"
  } else {
    var table = '<table><tr><th>First Name</th><th>Last Name</th><th>Age</th><th>E-mail</th><th>Edit</th><th>Delete</th></tr>'
    var tempEmplist = employeeList
    tempEmplist.map((employee, index) => 
      table +="<tr>"
        +"<td>"+employee.firstname+"</td>"
        +"<td>"+employee.lastname+"</td>"
        +"<td>"+employee.age+"</td>"
        +"<td>"+employee.email+"</td>"
        +"<td><button onclick='deleteEmployee("+employee.id+")'>Delete</button></td>"
        +"<td><button onclick='updateEmployee("+employee.id+")'>Edit</button></td>"
        +"</tr>"
      )
    displayEmployees.innerHTML = table +="</table>"
  }
  empCount.innerHTML = "( " +employeeList.length +" )"
}

function deleteEmployee (empId) {
  employeeList = employeeList.filter((emp) => emp.id !== empId )
  reset()
}
var editEmp;
function updateEmployee (emplId) {
  editEmp = employeeList.filter((emp) => emp.id === emplId )
   for(var i = 0; i< ids.length; i++) {
     employee = editEmp[0]
    document.getElementById(ids[i]).value = employee[ids[i]]
  }
  document.getElementById('add').style.display = 'none'
  document.getElementById('update').style.display = 'block'
   console.log(employee)
}
function reset() {
  employee = {
    id: Math.floor(Math.random() * 10000000000) + 1,
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
  } else if (key === 'update') {
    employeeList.map(empl => empl.id === employee.id ? employee : empl)
    reset()
  } else {
    employee[key] = value
  }
}

reset()