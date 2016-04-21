window.onload = function () {

  var canvas = document.querySelector('#canvas');
  canvas.width = 500;
  canvas.height = 400;

  if ( canvas && canvas.getContext ) {
    var canvasContext = canvas.getContext('2d');
    if ( canvasContext ) {
      canvasContext.fillStyle = 'salmon';
      canvasContext.fillRect( 0, 0, canvasContext.canvas.width, canvasContext.canvas.height );
    }
  }

};