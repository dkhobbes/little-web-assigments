console.log('testing script');

var divP =document.querySelectorAll("p");
var input = document.querySelector('.input');


var sum = 0;

for (var i = 0; i < divP.length; i++) {
  var arr = divP[i].textContent.split(" ");
  sum = sum + arr.length;
}

var result = Math.floor(sum/230)
input.textContent = "reading time: " + result + " minutes";
console.log(result);
