/**
 * Created by zencoder on 4/7/16.
 */

// createLinearGradient()
// createRadialGradient()
// addStopColor()

window.onload = function () {

  var clr1 = '#f00';
  var clr2 = '#0f0';
  var clr3 = '#00f';

  var x0 = 525;
  var y0 = 150;
  var r0 = 20;
  var r1 = 100;

  var gradient = document.querySelector('#gradient');
  var radialGradient = document.querySelector('#radialGradient');

  // CREATE LINEAR GRADIENT
  if ( gradient && gradient.getContext ) {

    gradient.width = 900;
    gradient.height = 400;

    var gradientContext = gradient.getContext('2d');

    if ( gradientContext ) {

      // CREATE DIAGONAL GRADIENT
      var gradientPattern1 = gradientContext.createLinearGradient(0,0,gradientContext.canvas.width,gradientContext.canvas.height);
      gradientPattern1.addColorStop(0, clr1);
      gradientPattern1.addColorStop(.5, clr2);
      gradientPattern1.addColorStop(1, clr3);

      gradientContext.fillStyle = gradientPattern1;
      gradientContext.fillRect(20,20,860,360);
      gradientContext.lineWidth = 2;
      gradientContext.strokeStyle = 'forestgreen';
      gradientContext.strokeRect(20,20,860,360);

    }

  }

  // CREATE RADIAL GRADIENT
  if ( radialGradient && radialGradient.getContext ) {

    radialGradient.width = 900;
    radialGradient.height = 400;

    var radialGradientCtx = radialGradient.getContext('2d');

    if ( radialGradientCtx ) {

      var radialPattern = radialGradientCtx.createRadialGradient(x0, y0, r0, x0-20, y0-20, r1);
      radialPattern.addColorStop(0, clr1);
      radialPattern.addColorStop(.5, clr2);
      radialPattern.addColorStop(1, clr3);

      radialGradientCtx.fillStyle = radialPattern;
      radialGradientCtx.globalAlpha = .6;
      radialGradientCtx.beginPath();
      radialGradientCtx.arc(x0,y0,r1,0,360*Math.PI/180);
      radialGradientCtx.stroke();
      radialGradientCtx.fill();

    }

  }



};
