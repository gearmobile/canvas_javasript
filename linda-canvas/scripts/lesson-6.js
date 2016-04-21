/**
 * Created by zencoder on 4/6/16.
 */

window.onload = function () {

  var text = document.querySelector('#text');

  if ( text && text.getContext ) {

    text.width = 900;
    text.height = 400;

    var textCtx = text.getContext('2d');

    if ( textCtx ) {

      var theString = 'Drawing Text on a Canvas';

      textCtx.fillStyle = 'green';
      textCtx.strokeStyle = 'blue';
      textCtx.save();

      // DRAW SIMPLE TEXT
      textCtx.fillText(theString,20,20);

      // DRAW TEXT WITH SOME FONT SETTINGS
      textCtx.fillStyle = 'sienna';
      textCtx.font = 'bold 2rem Arial, sans-serif';
      textCtx.fillText(theString,20,90);
      textCtx.save();

      // DRAW TEXT WITH STROKE AND FILL
      textCtx.lineWidth = 4;
      textCtx.font = '3rem Verdana';
      textCtx.fillStyle = 'yellow';
      textCtx.strokeStyle = 'rgba(0,255,0,.8)';
      //textCtx.textBaseline = 'middle';
      textCtx.strokeText(theString,20,160);
      textCtx.fillText(theString,20,160);
      textCtx.save();

      // DRAW TEXT WITH MEASURETEXT
      var textWidth = textCtx.measureText(theString).width;
      textCtx.beginPath();
      textCtx.strokeStyle = 'red';
      textCtx.moveTo(20,180);
      textCtx.lineTo(textWidth,180);
      textCtx.stroke();

    }

  }

};