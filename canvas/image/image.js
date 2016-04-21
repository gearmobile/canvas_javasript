var canvas = document.querySelector('#image');

// SET IMAGE EXAMPLE
var image = new Image();
image.src = 'sample.jpg';
image.width = 150;
image.height = 93;
image.alt = 'Image';


if ( canvas.getContext ) {

  canvas.width = 400;
  canvas.height = 400;

  var canvasContext = canvas.getContext('2d');

  canvasContext.drawImage(image, 10, 10);

}
