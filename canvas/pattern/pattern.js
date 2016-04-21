var canvas = document.querySelector('#pattern');

if ( canvas.getContext ) {

  // SET WIDTH AND HEIGHT OF CANVAS
  canvas.width = 400;
  canvas.height = 400;

  // GET 2D CONTEXT
  var canvasContext = canvas.getContext('2d');

  // CREATE EXAMPLE IMAGE
  var image = new Image();
  image.src = 'pattern.png';
  image.width = 50;
  image.height = 31;
  image.alt = 'Pattern';

  // SET PATTERN EXAMPLE
  var canvasPattern = canvasContext.createPattern(image, 'repeat');

  // SET FILL VIA PATTERN
  canvasContext.fillStyle = canvasPattern;
  canvasContext.fillRect(0, 0, 200, 200);

}
