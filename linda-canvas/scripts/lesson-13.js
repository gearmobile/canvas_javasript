/**
 * Created by zencoder on 4/8/16.
 */

// clipping path - секущий контур
// clip() - метод для создания секущего контура

function canvasInit() {

  var ctx = document.querySelector('#canvas').getContext('2d');
  var ctx1 = document.querySelector('#canvas1').getContext('2d');

  var image = new Image();
  var color = 'firebrick';
  var imagePath = 'images/image.jpg';

  if ( ctx && ctx1 ) {
    ctx.canvas.width = ctx1.canvas.width = 900;
    ctx.canvas.height = ctx1.canvas.height = 400;
  }

  image.addEventListener('load', function () {
    ctx.drawImage(image, 0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx1.drawImage(image, 0, 0, ctx1.canvas.width, ctx1.canvas.height);
  });

  image.src = imagePath;

  // CREATE CIRCLE CLIPPING PATH
  ctx.arc(ctx.canvas.width/2, ctx.canvas.height/2, ctx.canvas.width*.2, 0, 360*Math.PI/180);
  ctx.clip();

  // CREATE COMPLEX CLIPPING CONTUR
  ctx1.strokeStyle = color;
  ctx1.lineWidth = 2;
  ctx1.beginPath();
  ctx1.moveTo(105,200);
  ctx1.lineTo(250,25);
  ctx1.lineTo(825,50);
  ctx1.lineTo(675,385);
  ctx1.closePath();
  ctx1.stroke();
  ctx1.clip();
}

window.addEventListener('load', function () {
  canvasInit();
});
