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

var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var addBtn = document.getElementById("addB");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}
addBtn.onclick = function(){
  var pId = document.getElementById("id").value;
  var pItem = document.getElementById("item").value;
  var pCategory = document.getElementById("category").value;
  var pStock = document.getElementById("stock").value;
  var pPrice = document.getElementById("price").value;
  var newProduct = {};

  var addProdRequest = new XMLHttpRequest();
  addProdRequest.open('POST', 'http://localhost:3000/api/v1/products');
  addProdRequest.onload = function(){
    newProduct.ID = pId;
    newProduct.Item = pItem;
    newProduct.Category = pCategory;
    newProduct.Stock = pStock;
    newProduct.Price = pPrice; 
  }
  addProdRequest.send(JSON.parse(newProduct));

}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var func;
func =  function () {
var request = new XMLHttpRequest();
request.open('GET', 'http://localhost:3000/api/v1/products');

request.onload = function() {
  var data = JSON.parse(request.response);
  var dat = '';
  var tf = document.getElementById('sr');
  //document.getElementById('test').innerHTML = data[0].Item;
  for (i = 0; i < data.length; i++) {
    if(i==0){
      dat += '<tr id="fs">';
      dat += '<td>' + data[i].ID + '</td>';
      dat += '<td>' + data[i].Item + '</td>';
      dat += '<td>' + data[i].Category + '</td>';
      dat += '<td>' + data[i].Stock + '</td>';
      dat += '<td>' + data[i].Price + '</td>';
      dat += '</tr>';
    } else{
      dat += '<tr>';
   dat += '<td>' + data[i].ID + '</td>';
   dat += '<td>' + data[i].Item + '</td>';
   dat += '<td>' + data[i].Category + '</td>';
   dat += '<td>' + data[i].Stock + '</td>';
   dat += '<td>' + data[i].Price + '</td>';
   dat += '</tr>';
    }
   
  }
  document.getElementById('sr').innerHTML = dat;
  document.getElementById('s1').innerHTML = tf.rows[0].cells[0].innerHTML;
  document.getElementById('s2').innerHTML = tf.rows[0].cells[1].innerHTML;
  document.getElementById('s3').innerHTML = tf.rows[0].cells[2].innerHTML;
  document.getElementById('s4').innerHTML = tf.rows[0].cells[3].innerHTML;
  document.getElementById('s5').innerHTML = tf.rows[0].cells[4].innerHTML;
  
};

request.send();
}

document.getElementById('srch').onclick = func;

/*var myRequest = new XMLHttpRequest();
myRequest.open('GET', 'http://localhost:3000/', true);
myRequest.onload = function(){	
	var data = JSON.parse(this.response);
	document.getElementById("test").innerHTML = data;
}

myRequest.send();
*/
//end func