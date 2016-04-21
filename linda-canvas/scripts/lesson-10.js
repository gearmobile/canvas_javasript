/**
 * Created by zencoder on 4/7/16.
 */

// toDataURL - сохраняет в формате DATA URL изображение, созданное в canvas
// getImageData - возвращает данные о цвете (RGB) и прозрачности указанного участка холста
// globalAlpha - задает уровень прозрачности, от 0 до 1

window.onload = function () {

  var canvas = document.querySelector('#canvas');
  var imagedata = document.querySelector('#imagedata');
  var alpha = document.querySelector('#alpha');

  // TODATAURL METHOD
  if ( canvas && canvas.getContext ) {

    canvas.width = 900;
    canvas.height = 300;

    var canvasCtx = canvas.getContext('2d');

    if ( canvasCtx ) {

      canvasCtx.fillStyle = 'khaki';
      canvasCtx.fillRect(0,0,200,100);
      canvasCtx.fillStyle = 'forestgreen';
      canvasCtx.fillRect(50,50,200,200);

      var imageData = canvas.toDataURL();
      console.log(imageData);

    }

  }

  // GETIMAGEDATA
  if ( imagedata && imagedata.getContext ) {

    imagedata.width = 900;
    imagedata.height = 200;

    var imagedataCtx = imagedata.getContext('2d');

    if ( imagedataCtx ) {

      imagedataCtx.fillStyle = 'rgb(255,0,0)';
      imagedataCtx.fillRect(10,10,100,40);
      imagedataCtx.save();

      imagedataCtx.fillStyle = 'rgb(0,255,0)';
      imagedataCtx.globalAlpha = .5;
      imagedataCtx.fillRect(90,30,50,50);

      var pixel = imagedataCtx.getImageData(10,10,1,1);
      var pixelReport = 'Pixel 1: '+pixel.data[0]+', '+pixel.data[1]+', '+pixel.data[2]+', '+pixel.data[3];
      console.log(pixelReport);

      var pixel2 = imagedataCtx.getImageData(90,30,1,1);
      var pixel2Report = 'Pixel 2: '+pixel2.data[0]+', '+pixel2.data[1]+', '+pixel2.data[2]+', '+pixel2.data[3];
      console.log(pixel2Report);
    }

  }

  // SET GLOBAL ALPHA COLOR
  if ( alpha && alpha.getContext ) {

    alpha.width = 900;
    alpha.height = 200;

    var alphaCtx = alpha.getContext('2d');

    if ( alphaCtx ) {

      alphaCtx.beginPath();
      alphaCtx.fillStyle = '#f00';
      alphaCtx.fillRect(50,50,100,50);

      alphaCtx.beginPath();
      alphaCtx.globalAlpha = .5;
      alphaCtx.fillStyle = '#00f';
      alphaCtx.arc(100,120,50,0,360*Math.PI/180,false);
      alphaCtx.fill();

    }

  }

};