var demo = document.getElementById("root");
var app = [{
     date: '1',
     des: 'Day 1'
 }, {
     date: '2',
     des: 'Day 2'
 }, {
     date: '20',
     des: 'Day 20'
 }, {
     date: '4',
     des: 'Day 4'
 }, {
     date: '19',
     des: 'Day 19'
 }];
var appointment = {
	des: '',
  date: ''
}
this.add = function () {
	app.push(appointment)
  console.log('app:',app)
  calenderApp()
}
this.dateChanged = function (type,value) {
 	appointment[type] = value
  
 }
 
 function daysInMonth(month, year) {
     return new Date(year, month, 0).getDate();
 }
 
 function createFrom() {
 var dx = '<input type="text" name="des" onchange="dateChanged(`des`,this.value)" placeholder="Des here..."><select name="date" onchange="dateChanged(`date`,this.value)">';
     
  
 	for(var d = 1; d<=31; d++ ) {
  	dx +='<option value="'+d+'">'+d+'</option>';
  }
  
  dx +=' </select>' ;
  document.getElementById("form").innerHTML = dx;
 }
 function calenderApp() {
 var calender = '<div><div id="form"></div><button onclick="add()">Add</button><ul style="list-style:none;">';
 
 var days = daysInMonth(6, 2018);
 var j = 1;
 
 while (j <= days) {
     calender += '<li style="min-width:200px;height:100px;border:1px solid black;float:left;overflow-y:scroll;overflow-x:hidden;"><div>Date:' + new Date(2018, 6, j).toDateString();
     for (var i = 0; i < app.length; i++) {
         if (app[i].date == j) {
             calender += '<div style="border:2px solid blue; padding:10px;margin:1px;">Des:' + app[i].des + '</div>'
     }
   }
   
  calender += '</div></li>';
 	j += 1;
 }
 calender += '</ul> </div> '
 demo.innerHTML = calender
 createFrom();
}
 calenderApp()

