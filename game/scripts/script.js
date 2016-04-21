// CANVAS 1
var canvas = document.querySelector('#canvas');
var ctx = canvas.getContext('2d');
ctx.moveTo(50,70);
ctx.lineTo(100,50);
ctx.stroke();

// CANVAS 2
var canvasTwo = document.querySelector('#canvas1');
canvasTwo.width = 300;
canvasTwo.height = 200;
var ctxTwo = canvasTwo.getContext('2d');
ctxTwo.strokeWidth = 1;
ctxTwo.strokeStyle = 'green';
ctxTwo.fillStyle = 'blue';
ctxTwo.shadowColor = 'brown';
ctxTwo.shadowBlur = 5;
ctxTwo.rect(10,30,80,40);
ctxTwo.fill();
ctxTwo.stroke();

// CANVAS 3
var canvasThree = document.querySelector('#canvas2');
canvasThree.width = 300;
canvasThree.height = 200;
var ctxThree = canvasThree.getContext('2d');
ctxThree.strokeText('ZigZag',10,10);
ctxThree.stroke();
ctxThree.lineWidth = 3;
ctxThree.strokeStyle = 'green';
var x = [40,70,100,130,160,190];
var y = 80;
ctxThree.moveTo(10,80);
ctxThree.beginPath();
for ( var i = 0; i < x.length; i++ ) {
  if ( y > 40 ) y = 40; else y = 80;
  ctxThree.lineTo(x[i],y);
}
ctxThree.stroke();

// CANVAS 4
var canvasFour = document.querySelector('#canvas3');
canvasFour.width = 300;
canvasFour.height = 200;
var ctxFour = canvasFour.getContext('2d');
ctxFour.lineWidth = 2;
function square(side, x, color) {
  ctxFour.strokeStyle = color;
  ctxFour.strokeRect(x,10,side,side);
  ctxFour.stroke();
}
square(15,10,'red');
square(25,50,'green');
square(35,110,'blue');
square(45,180,'khaki');


// CANVAS 5
var canvasFive = document.querySelector('#canvas4');
canvasFive.width = 300;
canvasFive.height = 200;
var ctxFive = canvasFive.getContext('2d');
ctxFive.lineWidth = 1;
function sQuare(obj){
  ctxFive.strokeStyle = obj.color;
  ctxFive.strokeRect(obj.x,10,obj.side,obj.side);
  ctxFive.stroke();
};
var a = {x:10,side:15,color:'red'};
sQuare(a);
sQuare({x:50,side:25,color:'green'});
sQuare({"x":"110", "side":"35", "color":"blue"});
sQuare(Object.create({x:180,side:45,color:'forestgreen'}));


// CANVAS IMAGE

var image = document.querySelector('#canvas5');
var ctxImage = image.getContext('2d');
var photo = new Image();
photo.onload = function () {
  ctxImage.drawImage(photo, 5, 5, 250, 120);
};
photo.src = './images/sample.jpg';
