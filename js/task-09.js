function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
const buttonEl = document.querySelector('.change-color');
const colorCodeEl = document.querySelector('.color')

buttonEl.addEventListener('click', changesBackgroundColors);
buttonEl.addEventListener('click', addsColorCode);

function changesBackgroundColors() {
  bodyEl.style.backgroundColor = getRandomHexColor()
};

function addsColorCode() {
  colorCodeEl.textContent = getRandomHexColor();
}



