const input = document.getElementById('name-input');
const nameLabel = document.getElementById('name-output');

input.addEventListener('input', onInputFocus);

function onInputFocus(event) {
    nameLabel.textContent = event.currentTarget.value
};