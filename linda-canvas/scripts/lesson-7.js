/**
 * Created by zencoder on 4/6/16.
 */

// shadowColor
// shadowBlur
// shadowOffsetX
// shadowOffsetY
// shadow - path, text, image

window.onload = function () {

  var shadow = document.querySelector('#shadow');

  if ( shadow && shadow.getContext ) {

    shadow.width = 900;
    shadow.height = 400;

    var shadowCtx = shadow.getContext('2d');

    if ( shadowCtx ) {

      // BASIC SHADOW SETIINGS
      shadowCtx.shadowColor = '#000';
      shadowCtx.shadowOffsetX = 10;
      shadowCtx.shadowOffsetY = 10;
      shadowCtx.shadowBlur = 10;

      // SIMPLE BOX WITH SHADOW
      shadowCtx.fillStyle = 'rgba(0,0,255,1)';
      shadowCtx.fillRect(20,20,200,100);
      shadowCtx.save();

      // DRAW TEXT WITH SHADOW
      var text = 'Drawing Text on a Canvas';
      shadowCtx.fillStyle = 'green';
      shadowCtx.font = 'bold 3rem Verdana';
      shadowCtx.shadowColor = 'rgba(0,100,100,.5)';
      shadowCtx.shadowOffsetX = 5;
      shadowCtx.shadowOffsetY = 5;
      shadowCtx.shadowBlur = 5;
      shadowCtx.fillText(text,60,200);
      shadowCtx.save();

      // DRAW PURPLISH SHADOW
      shadowCtx.lineCap = 'round';
      shadowCtx.lineWidth = 25;
      shadowCtx.shadowColor = 'rgba(150,0,150,.5)';
      shadowCtx.shadowBlur = 15;
      shadowCtx.strokeStyle = 'red';
      shadowCtx.shadowOffsetX = -10;
      shadowCtx.shadowOffsetY = -5;
      shadowCtx.beginPath();
      shadowCtx.moveTo(50,300);
      shadowCtx.lineTo(450,300);
      shadowCtx.stroke();
      shadowCtx.save();
    }

  }

};
