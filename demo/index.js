import Canfetti from '../src/Canfetti';

const confetti = new Canfetti();
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const burstToggle = document.getElementById('burstToggle');

confetti.startBurst();

startButton.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopImmediatePropagation();
  e.stopPropagation();
  confetti.startStream();
});

stopButton.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopImmediatePropagation();
  e.stopPropagation();
  confetti.stopStream();
});

burstToggle.addEventListener('click', (e) => {
  const isActive = !e.target.checked;

  e.stopImmediatePropagation();
  e.stopPropagation();

  if (isActive) confetti.stopBurst();
  else confetti.startBurst();
});
