/**
 * Created by zencoder on 4/12/16.
 */

// setAttribute('attribute','value')

"use strict";


function canvFunct () {

  var ctx = document.querySelector('#canvas').getContext('2d');

  if ( ctx ) {

    ctx.canvas.width = 600;
    ctx.canvas.height = 400;

  }

}

function slideImages () {

  //

}


window.addEventListener('load', function () {

  var imagePathes = [ 'images/j0149014.jpg', 'images/j0149024.jpg', 'images/j0149029.jpg', 'images/j0178677.jpg' ];
  var image = document.createElement('img');
  image.setAttribute('width', ctx.canvas.width);
  image.setAttribute('height', ctx.canvas.height);
  slideImages();
  setInterval(slideImages, 3000);

  canvFunct();
});