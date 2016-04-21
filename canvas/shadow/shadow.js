const shadow = document.querySelector('#shadow');

if ( shadow.getContext ) {

  shadow.width = 200;
  shadow.height = 200;

  const shadowContext = shadow.getContext('2d');

  // SET SHADOW RULES
  shadowContext.shadowOffsetX = 5;
  shadowContext.shadowOffsetY = 5;
  shadowContext.shadowBlur = 4;
  shadowContext.shadowColor = 'rgba(0, 0, 0, .5)';

  // GENERATE RED FILLED RECTANGLE
  shadowContext.fillStyle = '#ff0000';
  shadowContext.fillRect(10, 10, 50, 50);

  // GENERATE BLUE FILLED RECTANGLE
  shadowContext.fillStyle = 'rgba(0, 0, 255, 1)';
  shadowContext.fillRect(30, 30, 50, 50);

}
