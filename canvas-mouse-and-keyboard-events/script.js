/**
 * Created by zencoder on 4/27/16.
 */

window.addEventListener('DOMContentLoaded', function () {

    var canvas = document.querySelector('#canvas');
    var ctx = canvas.getContext('2d');

    if ( ctx ) {

        canvas.width = 600;
        canvas.height = 400;

        ctx.fillStyle = 'maroon';
        ctx.strokeRect(0,0,canvas.width, canvas.height);
        ctx.fillStyle = 'lightgreen';
        ctx.fillRect(0,0,canvas.width, canvas.height);

    }

}, false);