//Global time display
var today = new Date();
function formatDate() {
var d = new Date(),
    minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
    hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
    ampm = d.getHours() >= 12 ? 'pm' : 'am',
    months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
return days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear()+' '+hours+':'+minutes+ampm;
}
document.getElementById('date').innerHTML = formatDate();

/*var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    //displayProjects(JSON.parse(this.responseText));
    document.getElementById("test").innerHTML = JSON.parse(this.responseText);
  }
};
xmlhttp.open('GET', 'http://localhost:3000/');
xmlhttp.send();*/
/*function func(){
	var link = "http://localhost:3000/";
function getData() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var obj = this.response;
      document.getElementById("test").innerHTML = obj;
    }
  };
  xhttp.open("GET", link, true);
  xhttp.send();
}
getData();
}
*/
function  func(){
var request = new XMLHttpRequest();
//request.open('GET', 'http://localhost:3000/');
request.open('GET', 'https://calm-beyond-30921.herokuapp.com');
request.responseType = 'text';

request.onload = function() {
  document.getElementById('test').innerHTML = request.response;
};

request.send();
}
/*var myRequest = new XMLHttpRequest();
myRequest.open('GET', 'http://localhost:3000/', true);
myRequest.onload = function(){	
	var data = JSON.parse(this.response);
	document.getElementById("test").innerHTML = data;
}

myRequest.send();
*/
//end func