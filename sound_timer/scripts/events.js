export function Events({
  minutes,
  seconds,
  btnPlay,
  btnStop,
  btnAdd,
  btnMinus,
  btnWoods,
  btnRain,
  btnCafe,
  btnFireplace,
  bgWoods,
  bgRain,
  bgCafe,
  bgFireplace, 
}) {
    // svgs const
    const btnWoodsSVG_Background     = btnWoods.querySelector('svg path')
    const btnRainSVG_Background      = btnRain.querySelector('svg path')
    const btnCafeSVG_Background      = btnCafe.querySelector('svg path')
    const btnFireplaceSVG_Background = btnFireplace.querySelector('svg path')

    const btnWoodsSVG_Symbol         = btnWoods.querySelector('svg path:nth-child(2)')
    const btnRainSVG_Symbol          = btnRain.querySelector('svg path:nth-child(2)')
    const btnCafeSVG_Symbol          = btnCafe.querySelector('svg path:nth-child(2)')
    const btnFireplaceSVG_Symbol     = btnFireplace.querySelector('svg path:nth-child(2)');

    let timer;
    
    function buttonColor(button) {

      btnWoodsSVG_Background.classList.remove('buttonPressedBackground')
      btnWoodsSVG_Symbol.classList.remove('buttonPressedSymbol')
      btnRainSVG_Background.classList.remove('buttonPressedBackground')     
      btnRainSVG_Symbol.classList.remove('buttonPressedSymbol')         
      btnCafeSVG_Background.classList.remove('buttonPressedBackground')     
      btnCafeSVG_Symbol.classList.remove('buttonPressedSymbol')         
      btnFireplaceSVG_Background.classList.remove('buttonPressedBackground')
      btnFireplaceSVG_Symbol.classList.remove('buttonPressedSymbol');    

      switch (button) {
        case 'woods':
          btnWoodsSVG_Background.classList.add('buttonPressedBackground')
          btnWoodsSVG_Symbol.classList.add('buttonPressedSymbol')
          break;

        case 'rain':
          btnRainSVG_Background.classList.add('buttonPressedBackground')     
          btnRainSVG_Symbol.classList.add('buttonPressedSymbol');  
          break;

        case 'cafe':
          btnCafeSVG_Background.classList.add('buttonPressedBackground')     
          btnCafeSVG_Symbol.classList.add('buttonPressedSymbol');          
          break;

        case 'fireplace':
          btnFireplaceSVG_Background.classList.add('buttonPressedBackground')
          btnFireplaceSVG_Symbol.classList.add('buttonPressedSymbol');          
          break;

      };
    };

    function audioController(ambient) {

      bgWoods.pause()
      bgRain.pause()
      bgCafe.pause()
      bgFireplace.pause()

      switch (ambient) {
        case 'woods':
          bgWoods.play()
          bgWoods.loop
          break;
      
        case 'rain':
          bgRain.play()
          bgRain.loop
          break;
      
        case 'cafe':
          bgCafe.play()
          bgCafe.loop
          break;
      
        case 'fireplace':
          bgFireplace.play()
          bgFireplace.loop
          break;
      };
    };

    function addMinutes() {
      let setMinutes = Number(minutes.textContent) + 5
      minutes.textContent = String(setMinutes).padStart(2, '0');
    };

    function subtractMinutes() {
      let setMinutes = Number(minutes.textContent) - 5
      if (setMinutes < 0){
        return console.log(`Time subtraction can't be less than zero`)
      }
      minutes.textContent = String(setMinutes).padStart(2, '0');
    };

    function startTimer() {
      timer = setTimeout(() => {   
    
        let secondsCountdown = String(Number(seconds.textContent) -1)
        let minutesCountdown = String(minutes.textContent);
    
        if (Number(secondsCountdown) < 0) {
          secondsCountdown = 59
          --minutesCountdown
          minutes.textContent = String(minutesCountdown).padStart(2, '0');
        };
    
        seconds.textContent = String(secondsCountdown).padStart(2, '0');
    
        if (minutesCountdown == 0 && secondsCountdown == 0) {
          return console.log('Countdown finished');
        }
    
        startTimer();
    
      }, 1000);            
    };

    const buttonPlayPressed = () => {
      console.log(`Play clicked`);
      if (minutes.textContent == '00') {
        return console.log(`Timer can't initiate`)
      }
      startTimer();
    };

    const buttonStopPressed = () => {
      console.log(`Stop clicked`);
      clearTimeout(timer);
      minutes.textContent = '00';
      seconds.textContent = '00';
    };

    const buttonAddPressed = () => {
      console.log(`Add clicked`);
      addMinutes();
    };

    const buttonMinusPressed = () => {
      console.log(`Minus clicked`);
      subtractMinutes();
    };

    const buttonWoodsPressed = () => {
      console.log(`Woods clicked`);
      audioController('woods');
      buttonColor('woods');
    };

    const buttonRainPressed = () => {
      console.log(`Rain clicked`);
      audioController('rain');
      buttonColor('rain');
    };

    const buttonCafePressed = () => {
      console.log(`Cafe clicked`);
      audioController('cafe');
      buttonColor('cafe');
    };

    const buttonFireplacePressed = () => {
      console.log(`Fireplace clicked`);
      audioController('fireplace');
      buttonColor('fireplace');
    };

    return {
      buttonPlayPressed,
      buttonStopPressed,
      buttonAddPressed,
      buttonMinusPressed,
      buttonWoodsPressed,
      buttonRainPressed,
      buttonCafePressed,
      buttonFireplacePressed,
    };
}
