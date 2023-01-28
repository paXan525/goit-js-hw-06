const input = document.getElementById('validation-input');
const inputLength = document.querySelector('input[data-length="6"]')
    
input.addEventListener('input', inputValid);
input.addEventListener('input', inputInvalid);

function inputValid(event) {
    if (event.currentTarget.value.length === Number(inputLength.dataset.length)
    ) {
        input.classList.add('valid')
    } else {
        input.classList.remove('valid')
    };
}

function inputInvalid() {
    if (event.currentTarget.value.length > inputLength.dataset.length || event.currentTarget.value.length < inputLength.dataset.length && event.currentTarget.value.length !== 0) {
        input.classList.add('invalid')
    } else {
        input.classList.remove('invalid')
    };
}