/**
 * Created by zencoder on 4/6/16.
 */

window.onload = function () {

  var curve = document.querySelector('#curve');

  if ( curve && curve.getContext ) {

    curve.width = 900;
    curve.height = 300;

    var curveCtx = curve.getContext('2d');

    if ( curveCtx ) {
      curveCtx.lineWidth = 5;
      curveCtx.strokeStyle = 'forestgreen';

      // DRAW BEZIER LINE
      curveCtx.beginPath();
      curveCtx.moveTo(50,200);
      curveCtx.bezierCurveTo(30,100,200,70,300,150);
      curveCtx.stroke();
      curveCtx.save();

      // MAKE CONTROL POINTS VISIBLE
      curveCtx.strokeStyle = 'rgba(255,0,0,.8)';
      curveCtx.lineWidth = 1;
      curveCtx.beginPath();
      curveCtx.moveTo(50,200);
      curveCtx.lineTo(30,100);
      curveCtx.lineTo(200,70);
      curveCtx.lineTo(300,150);
      curveCtx.stroke();
      curveCtx.save();

      // DRAW QUADRATIC CURVE
      curveCtx.lineWidth = 4;
      curveCtx.strokeStyle = 'red';
      curveCtx.beginPath();
      curveCtx.moveTo(400,200);
      curveCtx.quadraticCurveTo(400,100,600,150);
      curveCtx.stroke();
      curveCtx.save();

      // MAKE CONTROL POINTS VISIBLE
      curveCtx.strokeStyle = 'blue';
      curveCtx.lineWidth = 1;
      curveCtx.beginPath();
      curveCtx.moveTo(400,200);
      curveCtx.lineTo(400,100);
      curveCtx.lineTo(600,150);
      curveCtx.stroke();
      curveCtx.save();
    }

  }
};


