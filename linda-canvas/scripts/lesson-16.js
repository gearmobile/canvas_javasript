/**
 * Created by zencoder on 4/8/16.
 */

// scale(x,y)

function canvasFunc () {

  var color = 'rgb(0,0,255)';
  var color1 = 'rgb(0,255,0)';
  var ctx = document.querySelector('#canvas').getContext('2d');

  if ( ctx ) {
    ctx.canvas.width = 900;
    ctx.canvas.height = 400;
  }

  ctx.fillStyle = color;
  ctx.globalAlpha = .7;

  // SET INITIAL SETTINGS
  ctx.fillRect(0,0,100,50);
  ctx.save();

  // SCALE IMAGE
  ctx.scale(2,2);
  ctx.fillStyle = color1;
  ctx.fillRect(130, 60, 100, 50);

  // RESTORE SETTINGS
  ctx.restore();

}

window.addEventListener('load', function () {
  canvasFunc();
});