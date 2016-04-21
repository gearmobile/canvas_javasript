/**
 * Created by zencoder on 4/5/16.
 */

window.onload = function () {

  var canvas = document.querySelector('#canvas');
  var circles = document.querySelector('#circles');

  if (canvas && canvas.getContext) {

    canvas.width = 900;
    canvas.height = 300;

    var canvasCtx = canvas.getContext('2d');

    if ( canvasCtx ) {
      canvasCtx.lineWidth = 5;
      canvasCtx.fillStyle = 'red';
      canvasCtx.strokeStyle = 'blue';
      canvasCtx.save();

      // DRAW OPENED STROKE PATH
      canvasCtx.beginPath();
      canvasCtx.moveTo(25,75);
      canvasCtx.lineTo(50,25);
      canvasCtx.lineTo(125,50);
      canvasCtx.lineTo(175,175);
      canvasCtx.stroke();

      // DRAW CLOSED STROKE PATH
      canvasCtx.beginPath(); // open contur
      canvasCtx.moveTo(225,175);
      canvasCtx.lineTo(250,25);
      canvasCtx.lineTo(325,50);
      canvasCtx.lineTo(375,175);
      canvasCtx.closePath(); // close contur
      canvasCtx.stroke(); // stroke contur

      // DRAW CLOSED FILLED PATH
      canvasCtx.beginPath(); // open contur
      canvasCtx.moveTo(425,175);
      canvasCtx.lineTo(450,25);
      canvasCtx.lineTo(525,50);
      canvasCtx.lineTo(575,175);
      canvasCtx.closePath(); // close contur
      canvasCtx.fill(); // fill contur

    }
  }

  if ( circles && circles.getContext ) {

    circles.width = 900;
    circles.height = 300;

    var circlesCtx = circles.getContext('2d');

    if ( circlesCtx ) {

      circlesCtx.fillStyle = '#f00';
      circlesCtx.strokeStyle = '#00f';
      circlesCtx.lineWidth = 5;

      // DRAW QUARTER ARC
      circlesCtx.beginPath();
      circlesCtx.arc(50,150,100,(Math.PI/180)*270,(Math.PI/180)*360);
      circlesCtx.stroke();
      circlesCtx.save();

      // DRAW THREE QUARTER ARC
      circlesCtx.strokeStyle = '#0f0';
      circlesCtx.beginPath();
      circlesCtx.arc(300,150,100,0,(Math.PI/180)*270,false);
      circlesCtx.stroke();
      circlesCtx.save();

      // DRAW STROKE AND FILL ARC
      circlesCtx.beginPath();
      circlesCtx.arc(550,150,100,0,(Math.PI/180)*360);
      circlesCtx.stroke();
      circlesCtx.fill();
      circlesCtx.save();

    }

  }

};