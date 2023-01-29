function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('#controls input');
const buttonCreateEl = document.querySelector('#controls button[data-create]');
const buttonDestroyEl = document.querySelector('#controls button[data-destroy]');
const boxesEl = document.querySelector('#boxes')

inputEl.addEventListener('input', inputChange)
buttonCreateEl.addEventListener('click', createBoxes);
buttonDestroyEl.addEventListener('click', destroyBox);

function inputChange(event) {
  inputEl.setAttribute('count', Number(event.currentTarget.value))
  }

let collectionOfBoxes = [];
let baseboxSize = 30;

  function createBoxes() {
    let countBox = Number(inputEl.getAttribute('count'));
  
    for (let i = 0; i < countBox; i += 1) {
      baseboxSize += 10;
      const newBox = document.createElement('div');
      newBox.style.backgroundColor = getRandomHexColor()
      newBox.style.height = baseboxSize + 'px';
      newBox.style.width = baseboxSize + 'px';
      newBox.style.margin = '10px';
      newBox.classList.add('new-box');

      collectionOfBoxes.push(newBox);
    }
    boxesEl.append(...collectionOfBoxes);
  };

function destroyBox(events) {
    const allNewBoxes = document.querySelectorAll('.new-box');

    for (let allNewBox of allNewBoxes) {
      boxesEl.removeChild(allNewBox);
    }
  collectionOfBoxes = [];
  baseboxSize = 30;
  };

