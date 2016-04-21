var canvas = document.querySelector('#rectangle');
var stroke = document.querySelector('#rectangle-stroke');

if ( canvas.getContext ) {

  canvas.width = 300;
  canvas.height = 200;

  stroke.width = 300;
  stroke.height = 200;

  var canvasContext = canvas.getContext('2d');
  var strokeContext = stroke.getContext('2d');

  // FIRST RECTANGLE
  canvasContext.fillStyle = '#ff0000';
  canvasContext.fillRect(10, 10, 50, 50);

  // SECOND RECTANGLE
  canvasContext.fillStyle = '#0000ff';
  canvasContext.fillRect(20, 20, 50, 50);

  // THIRD CLEAR RECTANGLE
  canvasContext.clearRect(35, 35, 20, 20);

  // FIRST STROKE RECTANGLE
  strokeContext.strokeStyle = '#ff0000';
  strokeContext.lineWidth = 1;
  strokeContext.strokeRect(20, 20, 60, 60);

  // SECOND STROKE RECTANGLE
  strokeContext.strokeStyle = '#0000ff';
  strokeContext.lineWidth = 3;
  strokeContext.strokeRect(40, 40, 80, 80);


}
