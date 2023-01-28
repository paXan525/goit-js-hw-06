const fontSizeControlEl = document.getElementById('font-size-control');
const textEl = document.getElementById('text');

fontSizeControlEl.addEventListener('input', changingЕheFontSize);

function changingЕheFontSize(event) {
    textEl.style.fontSize = event.currentTarget.value + 'px';
};