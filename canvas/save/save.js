var canvas = document.querySelector('#save');

if ( canvas.getContext ) {

  canvas.width = 300;
  canvas.height = 300;

  var canvasContext = canvas.getContext('2d');

  // FIRST STATE
  canvasContext.fillStyle = '#ff0000';
  canvasContext.fillRect(10, 10, 50, 50);
  canvasContext.save();

  // SECOND STATE
  canvasContext.fillStyle = '#00ff00';
  canvasContext.fillRect(20, 20, 50, 50);
  canvasContext.save();

  // THIRD STATE
  canvasContext.fillStyle = '#0000ff';
  canvasContext.fillRect(30, 30, 50, 50);

  // RESTORE TO SECOND STATE
  canvasContext.restore();
  canvasContext.fillRect(40, 40, 50, 50);

  // RESTORE TO FIRST STATE
  canvasContext.restore();
  canvasContext.fillRect(50, 50, 50, 50);

}
