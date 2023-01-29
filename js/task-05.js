const input = document.getElementById('name-input');
const nameLabel = document.getElementById('name-output');

input.addEventListener('input', onInputFocus);

function onInputFocus(event) {
    if (event.currentTarget.value.length === 0) {
        nameLabel.textContent = 'Anonymous';
    } else {
        nameLabel.textContent = event.currentTarget.value;
    };
};