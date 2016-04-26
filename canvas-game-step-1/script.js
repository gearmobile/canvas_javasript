/**
 * Created by zencoder on 4/26/16.
 */

var canvas;
var ctx;

var frames = 24;
var mouseX = null;
var paddleX = null;

var ballX = 50;
var ballY = 50;
var ballStepX = 5;
var ballStepY = 6;
var ballRadius = 10;

var paddleWidth = 100;
var paddleHeight = 10;
var paddleOffset = 40;

function mouseCoord (event) {
    var canvasOffset = canvas.getBoundingClientRect();
    var htmlDocument = document.documentElement;
    mouseX = event.clientX - canvasOffset.left - htmlDocument.scrollLeft;
    paddleX = mouseX - paddleWidth/2;
}

function drawRect (boxX, boxY, boxWidth, boxHeight, boxFillColor) {
    ctx.fillStyle = boxFillColor;
    ctx.fillRect(boxX, boxY, boxWidth, boxHeight);
}

function drawBall (centerX, centerY, radius, fillColor) {
    ctx.fillStyle = fillColor;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 360*Math.PI/180, true);
    ctx.fill();
    ctx.closePath()
}

function drawAll () {
    drawRect(0, 0, canvas.width, canvas.height, '#000');
    drawBall(ballX, ballY, ballRadius, 'firebrick');
    drawRect(paddleX, canvas.height - paddleOffset, paddleWidth, paddleHeight, 'whitesmoke');
}

function moveAll () {

    ballX += ballStepX;
    ballY += ballStepY;

    if ( ballX < 0 || ballX > canvas.width ) {
        ballStepX *= -1;
    }
    if ( ballY < 0 || ballY > canvas.height ) {
        ballStepY *= -1;
    }

    var paddleTopEdge = canvas.height - paddleOffset;
    var paddleBottomEdge = paddleTopEdge + paddleHeight;
    var paddleLeftEdge = paddleX;
    var paddleRightEdge = paddleX + paddleWidth;

    if ( ballX + ballRadius > paddleLeftEdge &&
        ballX + ballRadius < paddleRightEdge &&
        ballY + ballRadius > paddleTopEdge &&
        ballY + ballRadius < paddleBottomEdge ) {
        ballStepY *= -1;
        var paddleCenter = mouseX + paddleWidth/2;
        var ballXDistance = ballX - paddleCenter;
        ballStepX = ballXDistance * 0.35;
    }
}

function updateAll () {
    moveAll();
    drawAll();
}

window.addEventListener('DOMContentLoaded', function () {

    canvas = document.querySelector('#canvas');
    ctx = canvas.getContext('2d');

    if ( ctx ) {

        canvas.width = 800;
        canvas.height = 500;

        setInterval( function () {

            updateAll();

        }, 1000/frames);

        canvas.addEventListener('mousemove', mouseCoord, false);

    }

}, false);