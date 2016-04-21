/**
 * Created by zencoder on 4/19/16.
 */

window.addEventListener('DOMContentLoaded', function () {

  var ctxCanvas = document.querySelector('#replaceImage').getContext('2d');
  var originImage = document.querySelector('#originImage');

  if ( ctxCanvas ) {

    ctxCanvas.canvas.width = originImage.naturalWidth;
    ctxCanvas.canvas.height = originImage.naturalHeight;
    ctxCanvas.drawImage(originImage, 0, 0);
    ctxCanvas.canvas.style.display = 'none';

    function shiftColors () {
      var imageData = ctxCanvas.getImageData(0, 0, ctxCanvas.canvas.width, ctxCanvas.canvas.height);
      for ( var i = 0; i < imageData.data.length; i += 4 ) {
        var dump = imageData.data[i];
        imageData.data[i+1] = imageData.data[i];
        imageData.data[i] = dump;
      }
      ctxCanvas.putImageData(imageData, 0, 0);
      ctxCanvas.canvas.style.display = 'inline';
    }

    document.querySelector('#btnReplace').addEventListener('click', shiftColors, false);

  }

}, false);