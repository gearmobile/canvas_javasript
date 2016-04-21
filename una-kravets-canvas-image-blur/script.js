/**
 * Created by zencoder on 4/7/16.
 */

// https://www.viget.com/articles/instagram-style-filters-in-html5-canvas
// https://www.bing.com/videos/search?q=javascript&&view=detail&mid=20047092674A7E6C5CAC20047092674A7E6C5CAC&FORM=VRDGAR

window.onload = function () {

  var sColor = '#804e0f';
  var eColor = '#3b003b';
  var photoSRC = 'https://s3.amazonaws.com/share.viget.com/images/viget-works.jpg';

  var canvas = document.querySelector('#canvas');

  if ( canvas && canvas.getContext ) {

    var photo = new Image();

    function render() {

      // SCALE SO THAT THE IMAGE FILLS THE CONTAINER
      var width = window.innerWidth;
      var scale = width / photo.naturalWidth;
      var height = photo.naturalHeight * scale;

      canvas.width = width;
      canvas.height = height;

      var canvasCtx = canvas.getContext('2d');

      if ( canvasCtx ) {
        canvasCtx.drawImage(photo, 0, 0);
      }

      var gradient = radialGradient(width,height);

    }

    // MAKE RADIAL GRADIENT WITH WIDTH AND HEIGHT
    function radialGradient(width, height) {

      var texture = document.querySelector('#canvas');

      if ( texture && texture.getContext ) {

        texture.width = width;
        texture.height = height;

        var textureCtx = texture.getContext('2d');

        if ( textureCtx ) {
          var gradient = textureCtx.createRadialGradient(width/2, height/2, 0, width/2, height/2, width * .6);

          gradient.addColorStop(0, sColor);
          gradient.addColorStop(1, eColor);

          textureCtx.fillStyle = gradient;
          textureCtx.fillRect(0, 0, textureCtx.canvas.width, textureCtx.canvas.height);

          return textureCtx;
        }

      }

    }

    photo.onload = render;
    photo.crossOrigin = 'Anonymous';
    photo.src = photoSRC;

  }



};

