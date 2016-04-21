/**
 * Created by zencoder on 4/4/16.
 */

window.onload = function () {

  var canvas = document.querySelector('#canvas');
  var lines = document.querySelector('#lines');
  var linecaps = document.querySelector('#linecaps');
  var linejoin = document.querySelector('#linejoin');

  if ( canvas && canvas.getContext ) {

    canvas.width = 600;
    canvas.height = 300;

    var canvasCtx = canvas.getContext('2d');

    if ( canvasCtx ) {

      canvasCtx.save();
      canvasCtx.strokeStyle = 'rgb(0,0,255)';
      canvasCtx.lineWidth = 5;
      canvasCtx.strokeRect(25,25,100,125);

      canvasCtx.save();
      canvasCtx.fillStyle = 'green';
      canvasCtx.fillRect(175,25,100,125);

      canvasCtx.save();
      canvasCtx.strokeStyle = 'rgb(255,0,0)';
      canvasCtx.fillStyle = 'yellow';
      canvasCtx.lineWidth = 10;
      canvasCtx.fillRect(325,25,100,125);
      canvasCtx.strokeRect(325,25,100,125);

      canvasCtx.clearRect(15,75,450,50);
    }
  }

  // DRAW LINES
  if ( lines && lines.getContext ) {
    lines.width = 600;
    lines.height = 300;
    var linesCtx = lines.getContext('2d');

    if ( linesCtx ) {
      for ( var i = 0; i < 10; i++ ) {
        linesCtx.beginPath();
        linesCtx.lineWidth = i+1;
        linesCtx.moveTo(25,25+i*15);
        linesCtx.lineTo(475,25+i*15);
        linesCtx.stroke();
      }
    }
  }

  // DRAW LINE CAPS
  if ( linecaps && linecaps.getContext ) {

    linecaps.width = 600;
    linecaps.height = 300;

    var linecapsCtx = linecaps.getContext('2d');

    if ( linecapsCtx ) {

      linecapsCtx.strokeStyle = 'cyan';
      linecapsCtx.lineWidth = 1;
      linecapsCtx.beginPath();
      linecapsCtx.moveTo(50,25);
      linecapsCtx.lineTo(50,175);
      linecapsCtx.moveTo(450,25);
      linecapsCtx.lineTo(450,175);
      linecapsCtx.stroke();
      linecapsCtx.save();


      linecapsCtx.lineWidth = 25;
      linecapsCtx.strokeStyle = '#000';

      // draw linecap = butt ---------------
      linecapsCtx.lineCap = 'butt';
      linecapsCtx.beginPath();
      linecapsCtx.moveTo(50,50);
      linecapsCtx.lineTo(450,50);
      linecapsCtx.stroke();

      // draw linecap = rounded ------------
      linecapsCtx.lineCap = 'round';
      linecapsCtx.beginPath();
      linecapsCtx.moveTo(50,100);
      linecapsCtx.lineTo(450,100);
      linecapsCtx.stroke();

      // draw linecap = square ------------
      linecapsCtx.lineCap = 'square';
      linecapsCtx.beginPath();
      linecapsCtx.moveTo(50,150);
      linecapsCtx.lineTo(450,150);
      linecapsCtx.stroke();
    }
  }

  if ( linejoin && linejoin.getContext ) {

    linejoin.width = 600;
    linejoin.height = 300;

    var linejoinCtx = linejoin.getContext('2d');

    if ( linejoinCtx ) {
      linejoinCtx.lineWidth = 15;
      linejoinCtx.strokeStyle = '#000';

      // draw linejoin = round
      linejoinCtx.lineJoin = 'round';
      linejoinCtx.beginPath();
      linejoinCtx.moveTo(25,150);
      linejoinCtx.lineTo(75,50);
      linejoinCtx.lineTo(125,150);
      linejoinCtx.stroke();

      // draw linejoin = bevel
      linejoinCtx.lineJoin = 'bevel';
      linejoinCtx.beginPath();
      linejoinCtx.moveTo(175,150);
      linejoinCtx.lineTo(225,50);
      linejoinCtx.lineTo(275,150);
      linejoinCtx.stroke();

      // draw linejoin = miter
      linejoinCtx.lineJoin = 'miter';
      linejoinCtx.beginPath();
      linejoinCtx.moveTo(325,150);
      linejoinCtx.lineTo(375,50);
      linejoinCtx.lineTo(425,150);
      linejoinCtx.stroke();
    }

  }


};