var canvas = document.querySelector('#text');
var text = 'Lorem ipsum dolor est';
var fontSize = 24;

if ( canvas.getContext ) {

  canvas.width = 400;
  canvas.height = 200;

  var canvasContext = canvas.getContext('2d');

  // DRAW SIMPLE TEXT
  canvasContext.fillStyle = '#0000ff';
  canvasContext.font = fontSize + 'px Arial, sans-serif';
  canvasContext.textAlign = 'start';
  canvasContext.textBaseline = 'middle';
  canvasContext.fillText(text, 10, 10);
  canvasContext.save();

  console.log('The text width is ' + canvasContext.measureText(text).width + 'px.');

}
