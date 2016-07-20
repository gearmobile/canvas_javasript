
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

    var guesses = 0;
    var message = 'Guess The Letter From a ( lower ) to z ( higher )';
    var letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'j', 'h', 'i', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
    var today = new Date();
    var letterToGuess = '';
    var higherOrLower = '';
    var letterGuessed = [];
    var gameOver = false;


    var canvas = document.querySelector('#uno');
    canvas.width = 500;
    canvas.height = 300;
    var canvasContext = canvas.getContext('2d');

    Debugger.log( 'Drawing canvas' );

    function init() {
        letterToGuess = letters[ Math.floor( Math.random() * letters.length ) ];
    }

    function keyPressed( event ) {

        if ( !gameOver ) {

            var letterPressed = String.fromCharCode( event.keyCode).toLowerCase();
            guesses++;
            letterGuessed.push( letterPressed );

            if ( letterToGuess === letterPressed ) {
                gameOver = true;
            } else {
                var letterToGuessIndex = letters.indexOf( letterGuessed );
                var letterPressedIndex = letters.indexOf( letterPressed );
                Debugger.log( letterPressedIndex );
                if ( letterPressedIndex < 0 ) {
                    higherOrLower = 'That is not a letter';
                } else if ( letterPressedIndex > letterToGuessIndex ) {
                    higherOrLower = 'Lower';
                } else {
                    higherOrLower = 'Higher';
                }
            }

        }
    }

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

    init();
    drawScreen();
}


function windowLoaded() {
    canvasApp();
}

window.addEventListener ( 'load', windowLoaded, false );
window.addEventListener( 'keydown', keyPressed, true );
