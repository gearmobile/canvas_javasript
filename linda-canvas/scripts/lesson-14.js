/**
 * Created by zencoder on 4/8/16.
 */


function canvasInit() {

  var imagePath = 'images/image.jpg';
  var videoPath = 'video/teaser.mp4';

  var ctx1 = document.querySelector('#canvas1').getContext('2d');
  var ctx2 = document.querySelector('#canvas2').getContext('2d');
  var ctx3 = document.querySelector('#canvas3').getContext('2d');
  var ctx4 = document.querySelector('#canvas4').getContext('2d');

  if ( ctx1 && ctx2 && ctx3 && ctx4 ) {
    ctx1.canvas.width = ctx2.canvas.width = ctx3.canvas.width = ctx4.canvas.width = 900;
    ctx1.canvas.height = ctx2.canvas.height = ctx3.canvas.height = ctx4.canvas.height = 400;
  }

  var image = new Image();

  // DRAW IMAGE WITH ORIGIN WIDTH AND HEIGHT
  image.addEventListener('load', function () {
    ctx1.drawImage(image, 0, 0);
  });

  // DRAW IMAGE WITH CANVAS WIDTH AND HEIGHT
  image.addEventListener('load', function () {
    ctx2.drawImage(image, 0, 0, ctx2.canvas.width, ctx2.canvas.height);
  });

  // DRAW CLIPPED IMAGE
  image.addEventListener('load', function () {
    ctx3.drawImage(image, 30, 30, ctx3.canvas.width/2, ctx3.canvas.height/2, 0, 0, ctx3.canvas.width*2/3, ctx3.canvas.height*2/3);
  });

  image.src = imagePath;

  // DRAW VIDEO
  var video = document.querySelector('#video');
  video.src = videoPath;
  video.play();

  setInterval(function () {
    ctx4.drawImage(video, 0, 0);
  }, 16); // отрисовывается в canvas видео каждые 16 миллисекунд

}




window.addEventListener('load', function () {
  canvasInit();
});