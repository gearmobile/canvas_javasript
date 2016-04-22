/**
 * Created by zencoder on 4/21/16.
 */

var canvas;
var ctxCanvas;

var frames = 30;
var ballX = 50;
var ballY = 50;
var ballRadius = 10;
var ballSpeedX = 5;
var ballSpeedY = 10;

var paddleWidth = 100;
var paddleHeight = 10;
var paddleOffset = 20;
var paddleX = null;

function paddleMove(event) {
  paddleX = event.clientX - canvas.getBoundingClientRect().left - document.documentElement.scrollLeft;
}

function drawBall(centerX, centerY, radius, ballFill) {
  ctxCanvas.fillStyle = ballFill;
  ctxCanvas.beginPath();
  ctxCanvas.arc(centerX, centerY, radius, 0, 360*Math.PI/180, true);
  ctxCanvas.fill();
}

function drawRect(rectX, rectY, rectWidth, rectHeight, rectFill) {
  ctxCanvas.fillStyle = rectFill;
  ctxCanvas.fillRect(rectX, rectY, rectWidth, rectHeight);
}

window.addEventListener('DOMContentLoaded', function () {

  canvas = document.querySelector('#canvas');
  ctxCanvas = canvas.getContext('2d');

  if ( ctxCanvas ) {

    canvas.width = 800;
    canvas.height = 500;

    setInterval(function () {

      ballX += ballSpeedX;
      ballY += ballSpeedY;

      var paddleLeftEdge = paddleX;
      var paddleRightEdge = paddleLeftEdge + paddleWidth;
      var paddleTopEdge = ( canvas.height - paddleHeight ) - paddleOffset;
      var paddleBottomEdge = paddleTopEdge + paddleHeight;
      console.log(paddleLeftEdge+' : '+paddleTopEdge+' : '+paddleRightEdge+' : '+paddleBottomEdge);
      if (  ballX > paddleLeftEdge && ballX < paddleRightEdge && ballY > paddleTopEdge && ballY < paddleBottomEdge ) {
        ballSpeedY *= -1;
      }

      if ( ballX > canvas.width ) {
        ballSpeedX *= -1;
      }
      if ( ballX < 0 ) {
        ballSpeedX *= -1;
      }
      if ( ballY > canvas.height ) {
        ballSpeedY *= -1;
      }
      if ( ballY < 0 ) {
        ballSpeedY *= -1;
      }


      drawRect(0, 0, canvas.width, canvas.height, '#000');
      drawBall(ballX, ballY, ballRadius, '#f00');
      drawRect(paddleX - paddleWidth/2, ( canvas.height - paddleHeight ) - paddleOffset, paddleWidth, paddleHeight, '#fff');

    }, 1000/frames);

    canvas.addEventListener('mousemove', paddleMove);
  }


}, false);