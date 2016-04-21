var canvas = document.querySelector('#text');
var text = 'Lorem ipsum dolor est';

if ( canvas.getContext ) {

  canvas.width = 400;
  canvas.height = 200;

  var canvasContext = canvas.getContext('2d');

  // AJUST SIMPLE TEXT
  canvasContext.fillStyle = '#0000ff';
  canvasContext.textAlign = 'start';
  canvasContext.textBaseline = 'top';

  var fontSize = 40;
  canvasContext.font = fontSize + 'px Arial, sans-serif';

  while( canvasContext.measureText(text).width > canvas.width ) {
    fontSize--;
    canvasContext.font = fontSize + 'px Arial, sans-serif';
  }

  canvasContext.fillText(text, 0, 0);
  console.log('Font size of the text is ' + fontSize + 'px');

}
