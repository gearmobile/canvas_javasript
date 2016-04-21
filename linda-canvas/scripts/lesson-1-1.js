/**
 * Created by zencoder on 4/4/16.
 */

window.onload = function () {
  var canvas = document.querySelector('#canvas');
  if ( canvas && canvas.getContext ) {

    canvas.width = 400;
    canvas.height = 300;

    var canvasContext = canvas.getContext('2d');

    if ( canvasContext ) {
      canvasContext.fillStyle = 'green';
      canvasContext.fillRect(20,20,100,100);

      canvasContext.strokeStyle = 'rgba(0,0,255,1)';
      canvasContext.lineWidth = 5;
      canvasContext.strokeRect(20,20,100,100);
    }

  }
};
