import colors from './js/colors.js';
import refs from './js/refs.js';

refs.startBtn.classList.add('start-btn');
refs.stopBtn.classList.add('stop-btn');

refs.startBtn.addEventListener('click', setColorSwitchHandler);
refs.stopBtn.addEventListener('click', stopColorSwitchHandler);

let colorSwitchID = null;

function setColorSwitchHandler() {
    const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
    colorSwitchID = setInterval(() => {
    refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
  }, 1000);
    refs.startBtn.setAttribute('disabled', true);
}

function stopColorSwitchHandler() {
    clearInterval(colorSwitchID);
    refs.startBtn.removeAttribute('disabled');
}
