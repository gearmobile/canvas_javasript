
var Debugger = function () {};
Debugger.log = function ( message ) {
    try {
        console.log( message )
    } catch ( exception ) {
        return;
    }
};

function canvasSupport () {
    return Modernizr.canvas;
}

function canvasApp() {

    if ( !canvasSupport() ) {
        return;
    }

    var canvas = document.querySelector('#uno');
    canvas.width = 500;
    canvas.height = 300;
    var canvasContext = canvas.getContext('2d');

    Debugger.log( 'Drawing canvas' );

    function drawScreen() {

        // clear canvas
        canvasContext.fillStyle = '#ffffaa';
        canvasContext.fillRect( 0, 0, canvas.width, canvas.height );

        // canvas text
        canvasContext.fillStyle = '#000';
        canvasContext.font = '700 20px Arial, sans-serif';
        canvasContext.textBaseline = 'top';
        canvasContext.fillText( 'Hello form Canvas', 150, 20 );

        // canvas image
        var canvasImage = new Image();
        canvasImage.addEventListener( 'load', function () {
            canvasContext.drawImage( canvasImage, 120, 80 );
        });
        canvasImage.src = 'gravatar.jpg';

        // canvas border
        canvasContext.strokeStyle = '#789';
        canvasContext.strokeRect( 5, 5, 490, 290 );
    }

    drawScreen();
}


function windowLoaded() {
    canvasApp();
}

window.addEventListener ( 'load', windowLoaded, false );
