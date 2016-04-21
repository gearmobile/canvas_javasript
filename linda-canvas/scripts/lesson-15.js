/**
 * Created by zencoder on 4/8/16.
 */

// translate(x,y)

function canvasInit () {

  var color1 = 'rgb(0,0,255)';
  var color2 = 'rgb(0,255,0)';

  var rectWidth = 100;
  var rectHeight = 50;

  var ctx = document.querySelector('#canvas').getContext('2d');

  if ( ctx ) {
    ctx.canvas.width = 900;
    ctx.canvas.height = 400;
  }

  ctx.fillStyle = color1;
  ctx.globalAlpha = .6;
  ctx.fillRect(0, 0, rectWidth, rectHeight);
  ctx.save();

  ctx.translate(ctx.canvas.width/2 - rectWidth/2, ctx.canvas.height/2 - rectHeight/2);
  ctx.fillStyle = color2;
  ctx.fillRect(0, 0, rectWidth, rectHeight);

}

window.addEventListener('load', function () {
  canvasInit();
});