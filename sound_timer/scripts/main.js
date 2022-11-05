import { displayElements, btnElements, bgElements } from "./elements.js";
import { Events } from "./events.js";


//display
const {
  minutes,
  seconds,
} = displayElements;

//buttons
const {
  btnPlay,
  btnStop,
  btnAdd,
  btnMinus,
  btnWoods,
  btnRain,
  btnCafe,
  btnFireplace
} = btnElements;


//sounds
const {
    bgWoods,
    bgRain,
    bgCafe,
    bgFireplace,  
} = bgElements

const clickEvent = Events({
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
});

//Events
btnPlay.addEventListener("click", () => {
  clickEvent.buttonPlayPressed();
});

btnStop.addEventListener("click", () => {
  clickEvent.buttonStopPressed();
});

btnAdd.addEventListener("click", () => {
  clickEvent.buttonAddPressed();
});

btnMinus.addEventListener("click", () => {
  clickEvent.buttonMinusPressed();
});

btnWoods.addEventListener("click", () => {
  clickEvent.buttonWoodsPressed();
});

btnRain.addEventListener("click", () => {
  clickEvent.buttonRainPressed();
});

btnCafe.addEventListener("click", () => {
  clickEvent.buttonCafePressed();
});

btnFireplace.addEventListener("click", () => {
  clickEvent.buttonFireplacePressed();
});
