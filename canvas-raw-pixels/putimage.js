/**
 * Created by zencoder on 4/16/16.
 */

window.addEventListener('DOMContentLoaded', function () {

  var ctx = document.querySelector('#canvas').getContext('2d');

  if ( ctx ) {

    ctx.canvas.width = 400;
    ctx.canvas.height = 300;

    var image = new Image();
    image.src = 'images/rhino.jpg';

    image.addEventListener('load', function () {
      imageDraw(this);
    });

    function imageDraw(img) {

      ctx.drawImage(img,0,0,ctx.canvas.width,ctx.canvas.height);
      var imageData = ctx.getImageData(0,0,ctx.canvas.width,ctx.canvas.height);

      function imageInvert() {
        for ( var i = 0; i < imageData.data.length; i += 4 ) {
          imageData.data[i] = 255 - imageData.data[i];
          imageData.data[i + 1] = 255 - imageData.data[i + 1];
          imageData.data[i + 2] = 255 - imageData.data[i + 2];
        }
        ctx.putImageData(imageData,0,0);
      }

      function grayScaleImage() {
        for ( var i = 0; i < imageData.data.length; i += 4 ) {
          var averageColor = ( imageData.data[i] + imageData.data[i+1] + imageData.data[i+2] ) / 3;
          imageData.data[i] = imageData.data[i+1] = imageData.data[i+2] = averageColor;
        }
        ctx.putImageData(imageData,0,0);
      }

      document.querySelector('#graScaleColor').addEventListener('click', grayScaleImage);
      document.querySelector('#invertColor').addEventListener('click', imageInvert);

    }

  }

});