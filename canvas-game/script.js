var canvas = null;
var ctx = null;
var mouseX = null;
var mouseY = null;

var frames = 24;

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 400;

var ballX = 50;
var ballY = 50;
var ballStepX = 5;
var ballStepY = 6;
var ballRadius = 10;

var paddleX = null;
const paddleWidth = 100;
const paddleHeight = 10;
const paddleOffset = 40;

const BRICK_WIDTH = CANVAS_WIDTH / 8;
const BRICK_HEIGHT = 40;
const BRICK_COUNT = 8;
var brickGrid = new Array(BRICK_COUNT);

function mouseCoords (event) {
  var canvasOffset = canvas.getBoundingClientRect();
  var htmlElement = document.documentElement;
  mouseX = event.clientX - canvasOffset.left - htmlElement.scrollLeft;
  mouseY = event.clientY - canvasOffset.top - htmlElement.scrollTop;
  paddleX = mouseX - paddleWidth/2;
}

function drawRect (leftX, leftY, boxWidth, boxHeight, boxFillColor) {
  ctx.fillStyle = boxFillColor;
  ctx.fillRect(leftX, leftY, boxWidth, boxHeight);
}

function drawBall(centerX, centerY, radius, fillColor) {
  ctx.fillStyle = fillColor;
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 360*Math.PI/180, true);
  ctx.fill();
  ctx.closePath();
}

function drawText(textX, textY, textColor) {
  var message = textX + ' : ' + textY;
  ctx.fillStyle = textColor;
  ctx.font = '13px Arial, sans-serif';
  ctx.fillText(message, textX, textY);
}

function brickReset() {
  for ( var i = 0; i < BRICK_COUNT; i++ ) {
    brickGrid[i] = Math.random() < 0.5 ? true : false;
  }
}

function drawBrick () {
  for ( var i = 0; i < BRICK_COUNT; i++ ) {
    if ( brickGrid[i] ) {
      drawRect(BRICK_WIDTH*i, 0, BRICK_WIDTH-2, BRICK_HEIGHT, 'salmon');
    }
  }
}

function drawAll() {
  drawRect(0, 0, canvas.width, canvas.height, '#000');
  drawBall(ballX, ballY, ballRadius, 'firebrick');
  drawRect(paddleX, canvas.height - paddleOffset, paddleWidth, paddleHeight, '#fff');
  drawText(mouseX, mouseY, 'yellow');
  drawBrick();
}

function moveAll() {

  var paddleLeftEdge = paddleX;
  var paddleRightEdge = paddleLeftEdge + paddleWidth;
  var paddleTopEdge = canvas.height - paddleOffset;
  var paddleBottomEdge = paddleTopEdge + paddleHeight;

  ballX += ballStepX;
  ballY += ballStepY;

  if ( ballX < 0 || ballX > canvas.width) {
    ballStepX *= -1;
  }
  if ( ballY < 0 || ballY > canvas.height ) {
    ballStepY *= -1;
  }
  if ( ballX > paddleLeftEdge && ballX < paddleRightEdge && ballY > paddleTopEdge && ballY < paddleBottomEdge ) {
    ballStepY *= -1;
    var paddleCenter = paddleLeftEdge + paddleWidth/2;
    var ballDistance = ballX - paddleCenter;
    ballStepX = ballDistance * 0.35;
  }

}

function updateAll() {
  setInterval( function () {
    moveAll();
    drawAll();
  }, 1000/frames);
}

window.addEventListener('DOMContentLoaded', function () {

  canvas = document.querySelector('#canvas');
  ctx = canvas.getContext('2d');

  if ( ctx ) {

    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;

    updateAll();
    canvas.addEventListener('mousemove', mouseCoords, false);
    brickReset();

  }
}, false);