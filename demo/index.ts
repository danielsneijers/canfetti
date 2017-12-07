import Canfetti from '../src/Canfetti';

const confetti = new Canfetti();
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');

confetti.initBurst();

startButton!.addEventListener('click', e => {
  e.preventDefault();
  e.stopImmediatePropagation();
  e.stopPropagation();

  confetti.startStream();
});

stopButton!.addEventListener('click', e => {
  e.preventDefault();
  e.stopImmediatePropagation();
  e.stopPropagation();
  confetti.stopStream();
});
