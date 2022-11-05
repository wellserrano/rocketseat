// Time Display
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

export const displayElements = {
  minutes,
  seconds,
}

// Timer buttons
const btnPlay = document.querySelector(".play");
const btnStop = document.querySelector(".stop");
const btnAdd = document.querySelector(".add");
const btnMinus = document.querySelector(".minus");

// Sound buttons
const btnWoods = document.querySelector(".woods");
const btnRain = document.querySelector(".rain");
const btnCafe = document.querySelector(".cafe");
const btnFireplace = document.querySelector(".fireplace");

export const btnElements = {
  btnPlay,
  btnStop,
  btnAdd,
  btnMinus,
  btnWoods,
  btnRain,
  btnCafe,
  btnFireplace,
};


// Sound clips
const bgWoods = new Audio('../sounds/woods.wav');
const bgRain = new Audio('../sounds/rain.wav');
const bgCafe = new Audio('../sounds/cafe.wav');
const bgFireplace = new Audio('../sounds/fireplace.wav');

export const bgElements = {
  bgWoods,
  bgRain,
  bgCafe,
  bgFireplace,  
};
