function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
const buttonEl = document.querySelector('.change-color');
const colorCodeEl = document.querySelector('.color')

buttonEl.addEventListener('click', changesBackgroundColors);

function changesBackgroundColors() {
  const randomColor = getRandomHexColor();
  
  bodyEl.style.backgroundColor = randomColor;
  colorCodeEl.textContent = randomColor;
};




