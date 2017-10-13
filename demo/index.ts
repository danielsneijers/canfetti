import Canfetti from '../src/Canfetti';

const confetti = new Canfetti();

confetti.initBurst();

const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');

startButton!.addEventListener('click', (e) => {

  confetti.start();
});

stopButton!.addEventListener('click', (e) => {

  confetti.stop();
});
