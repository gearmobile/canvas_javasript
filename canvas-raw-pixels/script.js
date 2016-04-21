/**
 * Created by zencoder on 16/04/16.
 */

window.addEventListener('DOMContentLoaded', function () {

  // SIMPLE GET IMAGE DATA

  var ctx = document.querySelector('#canvas').getContext('2d');

  if ( ctx ) {

    var rawPixel;

    ctx.canvas.width = 400;
    ctx.canvas.height = 400;

    ctx.fillStyle = '#00f';
    ctx.fillRect(0,0,100,100);

    ctx.fillStyle = 'rgba(0,255,0,.5)';
    ctx.fillRect(30,30,100,100);

    rawPixel = ctx.getImageData(40,40,1,1);
    console.log(rawPixel.data[0], rawPixel.data[1], rawPixel.data[2], rawPixel.data[3]);

    rawPixel = ctx.getImageData(20,20,1,1);
    console.log(rawPixel.data[0], rawPixel.data[1], rawPixel.data[2], rawPixel.data[3]);

  }

  // COLOR PICKER

  var picker = document.querySelector('#picker').getContext('2d');
  var colorBox = document.querySelector('#colorBox');

  var image = new Image();
  image.src = 'images/rhino.jpg';

  function getColor(event) {
    var cx = event.clientX - picker.canvas.offsetLeft;
    var cy = event.clientY - picker.canvas.offsetTop;
    var currentColor = picker.getImageData(cx, cy, 1, 1);
    colorBox.style.background = 'rgba(' + currentColor.data[0] + ',' + currentColor.data[1] + ',' + currentColor.data[2] + ',' + currentColor.data[3] + ')';
    colorBox.textContent = 'rgba(' + currentColor.data[0] + ',' + currentColor.data[1] + ',' + currentColor.data[2] + ',' + currentColor.data[3] + ')';
  }

  if ( picker ) {

    picker.canvas.width = 400;
    picker.canvas.height = 300;

    image.addEventListener('load', function () {
      picker.drawImage(image, 0, 0, picker.canvas.width, picker.canvas.height);
      image.crossOrigin = "Anonymous";
    });

    picker.canvas.addEventListener('mousemove', getColor);

  }

});