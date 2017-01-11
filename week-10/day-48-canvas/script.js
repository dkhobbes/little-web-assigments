var canvas1 = document.querySelector('#canvas-1');
var context = canvas1.getContext('2d');

console.log(context);

// Draw a bar chart
context.strokeRect (0,0,200,200);
context.strokeRect (0,0,280,260);


context.fillStyle = '#049';
context.fillRect (20,100,50,100);
context.fillStyle = '#088';
context.fillRect (120,50,50,150);

//Paths
context.beginPath();
context.moveTo(210,210);
context.lineTo(280,260);
context.lineTo(20,210);
context.closePath();

context.fill();
context.stroke();

//Circles

context.fillStyle = '#04F';
context.lineWidth = 2;

context.beginPath();
context.arc(50, 300, 30, 0.5 * Math.PI, 1 * Math.PI, true);
context.lineTo(50,300);
context.fill();
context.stroke();

context.fillStyle = '#94F';
context.beginPath();
context.arc(50, 300, 30, 0.5 * Math.PI, 1 * Math.PI, false);
context.lineTo(50,300);
context.closePath();
context.fill();
context.stroke();

var canvas2 = document.querySelector('#canvas-2');
var context = canvas2.getContext('2d');
