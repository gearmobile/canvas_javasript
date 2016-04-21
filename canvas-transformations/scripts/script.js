var canvas = document.querySelector('#canvas');

if ( canvas.getContext ) {

  canvas.width = 400;
  canvas.height = 400;

  var canvasContext = canvas.getContext('2d');

  var image = new Image();

  image.onload = function () {

    canvasContext.save(); // сохранить начальные настройки холста

    canvasContext.translate(40,50); // сместить рисунок
    canvasContext.rotate(30*Math.PI/180); // повернуть рисунок
    canvasContext.scale(0.3,0.3); // уменьшить масштаб рисунка
    canvasContext.drawImage(image,0,0); // нарисовать рисунок

    canvasContext.restore(); // восстановить начальные настройки холста

    canvasContext.save();
    canvasContext.rotate(-30*Math.PI/180);
    canvasContext.translate(150,150);
    canvasContext.scale(0.5,0.5);
    canvasContext.drawImage(image,0,0);

    canvasContext.restore();

  };

  image.src = 'images/small.jpg';



}