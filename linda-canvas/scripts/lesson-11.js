/**
 * Created by zencoder on 4/8/16.
 */

// НИЖЕ ПРЕДСТАВЛЕНЫ ДВА СВОЙСТВА КУРСОРА МЫШИ
// clientX - позиция курсора мыши по оси X относительно левого верхнего угла окна window
// clientY - позиция курсора мыши по оси Y относительно верхнего левого угла окна window

// НИЖЕ ПРЕДСТАВЛЕНЫ ДВА СВОЙСТВА ЭЛЕМЕНТА
// offsetLeft - позиция элемента по оси X относительно верхнего левого угла окна window
// offsetTop - позиция элемента по оси Y относительно верхнего левого угла окна window

function initCanvas() {

  var ctx = document.querySelector('#canvas').getContext('2d');

  ctx.canvas.width = 600;
  ctx.canvas.height = 400;

  ctx.canvas.addEventListener('mousemove', function (event) {
    var mouseX = event.clientX - ctx.canvas.offsetLeft;
    var mouseY = event.clientY - ctx.canvas.offsetTop;
    document.querySelector('#moveCanvas').innerHTML = 'Canvas position: ' + mouseX + ' | ' + mouseY;
  });

  ctx.canvas.addEventListener('click', function (event) {
    var mouseX = event.clientX - ctx.canvas.offsetLeft;
    var mouseY = event.clientY - ctx.canvas.offsetTop;
    document.querySelector('#clickCanvas').innerHTML = 'Canvas click: ' + mouseX + ' | ' + mouseY;
  });

  ctx.canvas.addEventListener('click', function (event) {
    var mouseX = event.clientX - ctx.canvas.offsetLeft;
    var mouseY = event.clientY - ctx.canvas.offsetTop;
    var color1 = 255 - Math.floor( Math.random() * 100 );
    var color2 = 255 - Math.floor( Math.random() * 100 );
    var color3 = 255 - Math.floor( Math.random() * 100 );
    var radius = 20 - Math.ceil( Math.random() * 10 );
    console.log(color1, color2, color3);
    console.log(radius);
    ctx.fillStyle = 'rgb(' + color1 + ',' + color2 + ',' + color3 +')';
    ctx.beginPath();
    ctx.arc(mouseX, mouseY, radius, 0, 360*180/Math.PI);
    ctx.fill();
  });

}

function initWindow () {
  window.addEventListener('mousemove', function (event) {
    document.querySelector('#moveWindow').innerHTML = 'Window position: ' + event.clientX + ' | ' + event.clientY;
  });
}

window.addEventListener('load', function () {
  initCanvas();
});

window.addEventListener('load', function () {
  initWindow();
});