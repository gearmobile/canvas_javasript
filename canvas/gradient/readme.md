# Canvas Gradient

У 2D-контекста есть метод createLinearGradient(), который создает экземпляр объекта CanvasGradient.
У объекта CanvasGradient есть метод addColorStop() для задания границы смещения градиента и цвета градиента

`var gradient = document.querySelector('#gradient');` // экземпляр DOM-объекта #gradient
`var gradientContext = gradient.getContext('2d');` // получить 2D-контекст
`var gradientGradient = gradientContext.createLinearGradient(x1, y1, x2, y2);` // использовать метод createLinearGradient контекста для создания нового экземпляра объекта CanvasGradient

gradientGradient.addColorStop(0, '#fff');
gradientGradient.addColorStop(1, '#000'); // задание границ смещения градиента и цвет градиента
