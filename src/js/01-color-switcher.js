const btnStartEl = document.querySelector('[data-start]');
const btnStoptEl = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');

btnStartEl.addEventListener('click', onStart);
btnStoptEl.addEventListener('click', onStop);

let timerId = null;

function onStart() {
    timerId = setInterval(getBgColor, 1000);
  
    btnStartEl.setAttribute('disabled', 'disabled');
    btnStoptEl.removeAttribute('disabled');
  }
  
  function onStop() {
    clearInterval(timerId);
  
    btnStartEl.removeAttribute('disabled');
    btnStoptEl.setAttribute('disabled', 'disabled');
  }
  
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
  function getBgColor() {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }
