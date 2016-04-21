/**
 * Created by zencoder on 4/5/16.
 */

var canvas = document.querySelector('#canvas');

if ( canvas && canvas.getContext ) {

  canvas.width = 600;
  canvas.height = 300;

  var canvasCtx = canvas.getContext('2d');

  if ( canvasCtx ) {

    canvasCtx.fillStyle = 'yellow';
    canvasCtx.strokeStyle = 'red';
    canvasCtx.lineWidth = 10;

    canvasCtx.save();

    canvasCtx.fillRect(25,25,100,125);
    canvasCtx.strokeRect(25,25,100,125);

    canvasCtx.fillStyle = 'blue';
    canvasCtx.strokeStyle = 'green';
    canvasCtx.lineWidth = 5;

    canvasCtx.fillRect(175,25,100,125);
    canvasCtx.strokeRect(175,25,100,125);

    canvasCtx.restore();
    canvasCtx.fillRect(325,25,100,125);
    canvasCtx.strokeRect(325,25,100,125);

  }
}
