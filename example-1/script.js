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
var paddleY = null;

function updateMousePosition(event) {
  var root = document.documentElement;
  var rect = canvas.getBoundingClientRect();
  var mouseX = event.clientX - rect.left - root.scrollLeft;
  //var mouseY = event.clientY - rect.top - root.scrollTop;
  paddleX = mouseX;
  //paddleY = mouseY;
}

function ballReset() {
  ballX = canvas.width / 2;
  ballY = canvas.height / 2
}

function moveAll() {

  var paddleTopEdge = canvas.height - (paddleHeight + paddleOffset);
  var paddleBottomEdge = paddleTopEdge + paddleHeight;
  var paddleLeftEdge = paddleX;
  var paddleRightEdge = paddleLeftEdge + paddleWidth;

  ballX += ballSpeedX;
  ballY += ballSpeedY;

  if ( ballX > canvas.width || ballX < 0 ) {
    ballSpeedX *= -1;
  }
  if ( ballY < 0 ) {
    ballSpeedY *= -1;
  }
  if ( ballX + ballRadius > paddleLeftEdge &&
       ballX + ballRadius < paddleRightEdge &&
       ballY + ballRadius > paddleTopEdge &&
       ballY + ballRadius < paddleBottomEdge ) {
    ballSpeedY *= -1;
  }
  if ( ballY > canvas.height ) {
    ballReset();
  }

}

function drawRect(topLeftX, topLeftY, boxWidth, boxHeight, boxColor) {
  ctxCanvas.fillStyle = boxColor;
  ctxCanvas.fillRect(topLeftX, topLeftY, boxWidth, boxHeight);
}

function drawCircle(circleX, circleY, circleRadius, circleColor) {
  ctxCanvas.fillStyle = circleColor;
  ctxCanvas.beginPath();
  ctxCanvas.arc(circleX, circleY, circleRadius, 0, 360*Math.PI/180, true);
  ctxCanvas.fill();
  ctxCanvas.closePath();
}

function drawAll() {
  drawRect(0, 0, canvas.width, canvas.height, '#000');
  drawCircle(ballX, ballY, ballRadius, '#f00');
  drawRect(paddleX - paddleWidth/2, canvas.height - (paddleHeight + paddleOffset), paddleWidth, paddleHeight, '#fff');
}

function updateAll() {
  moveAll();
  drawAll();
}

window.addEventListener('DOMContentLoaded', function () {

  canvas = document.querySelector('canvas');
  ctxCanvas = canvas.getContext('2d');

  if ( ctxCanvas ) {

    canvas.width = 800;
    canvas.height = 400;

    setInterval(updateAll, 1000/frames);

    canvas.addEventListener('mousemove', updateMousePosition);
  }

});

































