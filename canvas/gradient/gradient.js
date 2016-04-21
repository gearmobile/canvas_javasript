function createRectLinearGradient (ctx, x, y, width, height) {
  return ctx.createLinearGradient(x, y, x+width, y+height);
}

var gradient = document.querySelector('#gradient');
var radial = document.querySelector('#radial');

if ( gradient.getContext ) {

  gradient.width = 200;
  gradient.height = 200;

  radial.width = 200;
  radial.height = 200;

  var gradientContext = gradient.getContext('2d');
  var radialContext = radial.getContext('2d');

  var gradientGradient = gradientContext.createLinearGradient(30, 30, 70, 70);
  gradientGradient.addColorStop(0, '#fff');
  gradientGradient.addColorStop(1, '#000');

  // SET FILLED RED RECTANGLE
  gradientContext.fillStyle = '#ff0000';
  gradientContext.fillRect(10, 10, 50, 50);

  // SET FILLED GRADIENT RECTANGLE
  gradientContext.fillStyle = gradientGradient;
  gradientContext.fillRect(30, 30, 50, 50);

  // SET FILLED GRADIENT RECTANGLE WITH OFFSET
  gradientContext.fillRect(50, 50, 70, 70);

  // use function createRectLinearGradient to make canvas gradient more easy
  var filledGradient = createRectLinearGradient(gradientContext, 100, 100, 80, 80);
  filledGradient.addColorStop(0, '#00ff00');
  filledGradient.addColorStop(1, '#0000ff');
  gradientContext.fillStyle = filledGradient;
  gradientContext.fillRect(100, 100, 80, 80);

  // SET EXAMPLE OF RADIAL GRADIENT
  var gradientRadial = radialContext.createRadialGradient(55, 55, 10, 55, 55, 30);
  gradientRadial.addColorStop(0, '#ff0000');
  gradientRadial.addColorStop(1, '#000');

  // SET BLUE FILLED RECTANGLE
  radialContext.fillStyle = '#0000ff';
  radialContext.fillRect(10, 10, 50, 50);

  // SET RADIAL GRADIENT RECTANGLE
  radialContext.fillStyle = gradientRadial;
  radialContext.fillRect(30, 30, 50, 50);
}
