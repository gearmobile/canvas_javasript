/**
 * Created by zencoder on 4/11/16.
 */

function funcCanvas () {

  var ctx = document.querySelector('#canvas').getContext('2d');
  var star = document.querySelector('#star').getContext('2d');

  if ( ctx ) {

    ctx.canvas.width = 900;
    ctx.canvas.height = 300;

    ctx.fillStyle = '#00f';
    ctx.fillRect(150,30,100,50);

    ctx.rotate(25*Math.PI/180);
    ctx.fillRect(150,30,100,50);

  }

  if ( star ) {

    star.canvas.width = 400;
    star.canvas.height = 400;
    star.strokeStyle = '#00f';
    star.translate( star.canvas.width / 2, star.canvas.height / 2 );

    var angle = 20;
    var radian = ( Math.PI / 180 ) * angle;

    for ( var i = 0; i < 360; i += angle ) {
      // вся фишка здесь - метод rotate() поворачивает canvas каждый раз на 20 градусов;
      // за точку отсчета берется предыдущее положение canvas, которое считается нулевым
      star.rotate( radian );
      star.beginPath();
      star.moveTo( -100, 0 );
      star.lineTo( 100, 0 );
      star.closePath();
      star.stroke();
    }

  }

}

window.addEventListener('load', function () {
  funcCanvas();
});