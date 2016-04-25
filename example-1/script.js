var ctx;
var ballX = 50;
var ballY = 50;
var ballStepX = 5;
var ballStepY = 7;
var ballRadius = 10;
var mouseX;
var paddleWidth = 100;
var paddleHeight = 10;
var paddleOffset = 40;
var frames = 30;



window.addEventListener('DOMContentLoaded', function () {

  ctx = document.querySelector('#canvas').getContext('2d');

  if ( ctx ) {

    ctx.canvas.width = 800;
    ctx.canvas.height = 400;

    ctx.canvas.addEventListener('mousemove', function (event) {
      mouseX = event.clientX - ctx.canvas.getBoundingClientRect().left - document.documentElement.scrollLeft;
    }, false);

    setInterval(function () {

      ballX += ballStepX;
      ballY += ballStepY;

      if ( ballX < 0 || ballX > ctx.canvas.width ) {
        ballStepX *= -1;
      }
      if ( ballY < 0 || ballY > ctx.canvas.height ) {
        ballStepY *= -1;
      }
      if ( ballX+ballRadius > mouseX &&
        ballX+ballRadius < mouseX+paddleWidth &&
        ballY+ballRadius > ctx.canvas.height-paddleOffset-paddleHeight &&
        ballY+ballRadius < ctx.canvas.height-paddleOffset ) {
        ballStepY *= -1;
      }

      ctx.fillStyle = '#000';
      ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height);

      ctx.fillStyle = '#f00';
      ctx.beginPath();
      ctx.arc(ballX,ballY,ballRadius,0,360*Math.PI/180,true);
      ctx.fill();
      ctx.closePath();

      ctx.fillStyle = '#00f';
      ctx.fillRect(mouseX,ctx.canvas.height-paddleOffset-paddleHeight, paddleWidth, paddleHeight);

    }, 1000/frames);

  }

}, false);