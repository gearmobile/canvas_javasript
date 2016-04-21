var canvas = document.querySelector('#circle');

if ( canvas.getContext ) {
  canvas.width = 300;
  canvas.height = 300;

  var canvasContext = canvas.getContext('2d');

  canvasContext.beginPath(); // start to draw

  canvasContext.strokeStyle = 'tomato';
  canvasContext.lineWidth = 3;
  canvasContext.arc(150, 150, 75, 0, 270*Math.PI/180, false);
  canvasContext.stroke();

}