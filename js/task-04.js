let counterValue = 0;

const valueEl = document.getElementById('value')
const decrementBtn = document.querySelector('#counter button[data-action="decrement"]');
const incrementBtn = document.querySelector('#counter button[data-action="increment"]');

decrementBtn.addEventListener('click', decrementsTheCounterValue)
incrementBtn.addEventListener('click', incrementsTheCounterValue)

function decrementsTheCounterValue() {
    valueEl.textContent = counterValue -= 1;
};

function incrementsTheCounterValue() {
    valueEl.textContent = counterValue +=1;
};