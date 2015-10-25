

var c =  document.getElementById("myCanvas");
var context = c.getContext("2d");

//Play with rectangles
context.fillStyle="yellow";
context.fillRect(0, 0, 300, 90);

context.fillStyle="blue";
context.fillRect(300, 0, 300, 90);

context.fillStyle="blue";
context.fillRect(0, 430, 300, 90);

context.fillStyle="yellow";
context.fillRect(300, 430, 300, 90);

//Draw the face
context.beginPath();
context.arc(270, 255, 160, 0, 2*Math.PI);
context.stroke();

//Dra left eye
context.beginPath();
context.arc(200, 205, 20, 0, 2*Math.PI);
context.stroke();

//Draw right eye
context.beginPath();
context.arc(350, 205, 20, 0, 2*Math.PI);
context.stroke();

//Draw the mouth
context.beginPath();
context.arc(270, 360, 30, 0, 2*Math.PI);
context.stroke();

//Draw the nose
context.moveTo(250, 225);
context.lineTo(300, 300);
context.stroke();

context.moveTo(300, 300);
context.lineTo(280, 320);
context.stroke();
/*
context.beginPath();
context.arc(355, 210, 30, 2*Math.PI);
context.stroke();
*/

