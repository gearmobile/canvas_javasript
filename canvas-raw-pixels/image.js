/**
 * Created by zencoder on 4/16/16.
 */

window.addEventListener('DOMContentLoaded', function () {

  var ctx = document.querySelector('#image').getContext('2d');
  var pngImage = document.querySelector('#pngImage').getContext('2d');
  var jpgImage = document.querySelector('#jpgImage').getContext('2d');

  if ( ctx ) {

    ctx.canvas.width = 400;
    ctx.canvas.height = 300;

    ctx.fillStyle = '#0f0';
    ctx.fillRect(0,0,100,100);
    ctx.save();

    ctx.fillStyle = '#00f';
    ctx.fillRect(30,30,100,100);
    ctx.save();

    var imagePng = ctx.toDataURL('image/png');
    var imageJpg = ctx.toDataURL('image/jpg',1);

    console.log(imagePng);

  }

   if ( pngImage ) {

     imagePng.addEventListener('load', function () {
       pngImage.drawImage(this,0,0);
     });

   }

});