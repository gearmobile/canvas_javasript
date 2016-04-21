/**
 * Created by zencoder on 4/6/16.
 */

// createPattern(pattern, repeat)
// repeat = repeat | repeat-x | repeat-y | no-repeat

window.onload = function () {

  var pattern = document.querySelector('#pattern');
  var videoPattern = document.querySelector('#videoCanvas');
  var insidePattern = document.querySelector('#inside');
  var outsidePattern = document.querySelector('#outside');

  // CREATE SIMPLE IMAGE PATTERN
  if ( pattern && pattern.getContext ) {

    pattern.width = 900;
    pattern.height = 400;

    var patternCtx = pattern.getContext('2d');

    if ( patternCtx ) {

      var image = new Image();
      image.onload = function () {
        patternCtx.fillStyle = patternCtx.createPattern(image, 'repeat');
        patternCtx.fillRect(0, 0, patternCtx.canvas.width, patternCtx.canvas.height);
      };
      image.src = 'images/sample.jpg';
    }
  }

  // CREATE SIMPLE VIDEO PATTERN
  if ( videoPattern && videoPattern.getContext ) {

    videoPattern.width = 900;
    videoPattern.height = 400;

    var videoPatternContext = videoPattern.getContext('2d');

    if ( videoPatternContext ) {

      setTimeout( function () {
        var elementVideo = document.querySelector('#videoSample');
        videoPatternContext.fillStyle = videoPatternContext.createPattern(elementVideo, 'no-repeat');
        videoPatternContext.fillRect(0, 0, videoPatternContext.canvas.width, videoPatternContext.canvas.height);
      }, 3000);

    }

  }

  // CREATE CANVAS INSIDE CANVAS
  if ( insidePattern && insidePattern.getContext ) {

    insidePattern.width = 25;
    insidePattern.height = 25;

    var insideCanvas = insidePattern.getContext('2d');

    if ( insideCanvas ) {
      insideCanvas.strokeStyle = '#f00';
      insideCanvas.lineWidth = 1;
      insideCanvas.beginPath();
      insideCanvas.moveTo(0, 0);
      insideCanvas.lineTo(25, 25);
      insideCanvas.stroke();
    }

  }

  if ( outsidePattern && outsidePattern.getContext ) {

    outsidePattern.width = 600;
    outsidePattern.height = 400;

    var outsideCanvas = outsidePattern.getContext('2d');

    if ( outsideCanvas ) {

      outsideCanvas.fillStyle = outsideCanvas.createPattern(insidePattern, 'repeat');
      outsideCanvas.fillRect(0, 0, outsideCanvas.canvas.width, outsideCanvas.canvas.height);

    }


  }


};
