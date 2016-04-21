/**
 * Created by zencoder on 18/04/16.
 */


window.addEventListener('DOMContentLoaded', function () {

  var mouseDown = false;
  var drawCtx = document.querySelector('#draw').getContext('2d');

  var link = document.createElement('a');
  link.innerHTML = 'download image';
  link.href = '#';
  link.download = 'result.png';
  document.body.insertBefore(link, drawCtx.canvas);

  if ( drawCtx ) {

    drawCtx.canvas.width = 400;
    drawCtx.canvas.height = 400;
    drawCtx.fillStyle = '#f00';

    function drawCanvas (event) {
      if ( mouseDown ) {
        var xCoor = event.clientX - drawCtx.canvas.offsetLeft;
        var yCoor = event.clientY - drawCtx.canvas.offsetTop;
        drawCtx.beginPath();
        drawCtx.arc(xCoor, yCoor, 2, 0, 360*Math.PI/180);
        drawCtx.fill();
      }
    }

    drawCtx.canvas.addEventListener('mousemove', drawCanvas, false);

    drawCtx.canvas.addEventListener('mousedown', function () {
      mouseDown = true;
    }, false);

    drawCtx.canvas.addEventListener('mouseup', function () {
      link.href = drawCtx.canvas.toDataURL('image/png');
      mouseDown = false;
    }, false);

  }


}, false);
