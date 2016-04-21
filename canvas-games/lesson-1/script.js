/**
 * Created by zencoder on 15/04/16.
 */

document.addEventListener('DOMContentLoaded', function () {

  var ctx = document.querySelector('#canvas').getContext('2d');

  if ( ctx ) {

    var startX = 75;
    var startY = 50;
    var ballSpeedX = 5;
    var ballSpeedY = 7;
    var ballRadius = 10;
    var framesPreSecond = 30;

    var paddleWidth = 100;
    var paddleHeight = 10;
    var paddleDistFromEdge = 60;
    var paddleX;

    ctx.canvas.width = 800;
    ctx.canvas.height = 600;

    // MOVE MOUSE
    function updateMousePosition (event) {
      var mouseX = event.clientX - ctx.canvas.getBoundingClientRect().left - document.documentElement.scrollLeft;
      paddleX = mouseX - paddleWidth / 2;
    }

    // MOVE BALL
    function moveAll() {
      startX += ballSpeedX;
      startY += ballSpeedY;
      if ( startX > ctx.canvas.width || startX < 0 ) {
        ballSpeedX *= -1;
      }
      if ( startY < 0 ) {
        ballSpeedY *= -1;
      }
      var paddleTopEdge = ctx.canvas.height - paddleDistFromEdge;
      var paddleBottomEdge = paddleTopEdge + paddleHeight;
      var paddleLeftEdge = paddleX;
      var paddleRightEdge = paddleX + paddleWidth;
      if (  startY+ballRadius > paddleTopEdge &&
            startY+ballRadius < paddleBottomEdge &&
            startX+ballRadius > paddleLeftEdge &&
            startX+ballRadius < paddleRightEdge ) {
        ballSpeedY *= -1;
        var paddleCenter = paddleX + paddleWidth / 2;
        var ballDistFromPaddleCenterX = startX - paddleCenter;
        ballSpeedX = ballDistFromPaddleCenterX * .35 ;
      }
      if ( startY > ctx.canvas.height ) {
        ballReset();
      }

    }

    // DRAW RECT
    function drawRect(topLeftX, topLeftY, boxWidth, boxHeight, fillColor) {
      ctx.fillStyle = fillColor;
      ctx.fillRect(topLeftX, topLeftY, boxWidth, boxHeight);
    }

    // DRAW BALL
    function drawBall(centerX, centerY, fillColor, ballRadius) {
      ctx.fillStyle = fillColor;
      ctx.beginPath();
      ctx.arc(centerX, centerY, ballRadius, 0, 360*Math.PI/180, true);
      ctx.fill();
      ctx.closePath();
      ctx.save();
    }

    // BALL RESET
    function ballReset() {
      startX = ctx.canvas.width / 2;
      startY = ctx.canvas.height / 2;
    }

    // DRAW CANVAS AND DRAW BALL
    function drawAll() {
      drawRect(0, 0, ctx.canvas.width, ctx.canvas.height, '#000');
      drawBall(startX, startY, 'firebrick', ballRadius);
      drawRect(paddleX, ctx.canvas.height - paddleDistFromEdge, paddleWidth, paddleHeight, '#fff');
    }

    function updateAll() {
      moveAll();
      drawAll();
    }

    setInterval(updateAll, 1000 / framesPreSecond);
    ctx.canvas.addEventListener('mousemove', updateMousePosition);

  }

}, false);