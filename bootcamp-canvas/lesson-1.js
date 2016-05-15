window.addEventListener('DOMContentLoaded', function () {

    //var canvas = document.querySelector('#canvas');
    var ctx = document.querySelector('#canvas').getContext('2d');

    if ( ctx ) {

        ctx.canvas.width = 400;
        ctx.canvas.height = 300;

    }

}, false);