var canvas = document.querySelector('#canvas');

if ( canvas.getContext ) {

  canvas.width = 400;
  canvas.height = 400;

  var canvasContext = canvas.getContext('2d');

  canvasContext.fillStyle = 'goldenrod';
  canvasContext.fillRect(100,100,200,200);

  canvasContext.strokeStyle = 'forestgreen';
  canvasContext.fillStyle = 'forestgreen';
  canvasContext.beginPath();
  canvasContext.moveTo(100,100);
  canvasContext.lineTo(200,50);
  canvasContext.lineTo(300,100);

  canvasContext.fill();
  canvasContext.stroke();

  canvasContext.fillStyle = 'khaki';
  canvasContext.fillRect(120,150,50,140);

  canvasContext.fillStyle = 'cornflowerblue';
  canvasContext.fillRect(200,150,80,100);

}