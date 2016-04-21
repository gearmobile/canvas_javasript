/**
 * Created by zencoder on 4/12/16.
 */


function canvasFunc() {


  ctx = document.querySelector('#canvas').getContext('2d');

  if ( ctx ) {

    ctx.canvas.width = 900;
    ctx.canvas.height = 400;

    ctx.fillStyle = '#00f';
    ctx.fillRect(0,0,100,50);

    ctx.fillStyle = '#f00';
    var tx = ctx.canvas.width / 2;
    var ty = ctx.canvas.height / 2;
    ctx.transform(1, 0, 0, 1, tx, ty);
    ctx.fillRect(0, 0, 100, 50);
    ctx.transform(1, 0, 0, 1, -tx, -ty);

  }

}









window.addEventListener('load', function () {
  canvasFunc();
});