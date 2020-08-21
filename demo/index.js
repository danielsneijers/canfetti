let confetti;

/**
 * When in development mode, dynamic import the Canfetti
 * bundle so we can develop with hot reload of the source
 * code.
 *
 * For production, we use the compiled file in the dist folder,
 * added by Webpack on compilation.
 */
if (process.env.NODE_ENV !== 'production') {
  import('../src/Canfetti').then(({ default: Canfetti }) => {
    confetti = new Canfetti();
    confetti.startBurst();
  });
} else {
  // eslint-disable-next-line no-undef
  confetti = new Canfetti();
  confetti.startBurst();
}

// const confetti = new Canfetti();
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const burstToggle = document.getElementById('burstToggle');

const toggleButtons = () => {
  startButton.classList.toggle('hidden');
  stopButton.classList.toggle('hidden');
};
const stopPropagation = (e) => {
  e.preventDefault();
  e.stopImmediatePropagation();
  e.stopPropagation();
};

startButton.addEventListener('click', (e) => {
  stopPropagation(e);
  confetti.toggleStream();
  toggleButtons();
});

stopButton.addEventListener('click', (e) => {
  stopPropagation(e);
  confetti.stopStream();
  toggleButtons();
});

burstToggle.addEventListener('click', (e) => {
  const isActive = !e.target.checked;

  e.stopImmediatePropagation();
  e.stopPropagation();

  if (isActive) confetti.stopBurst();
  else confetti.startBurst();
});
