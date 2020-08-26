# Canfetti 🎊

Celebrate more with this HTML5 canvas enabled confetti library 🎊 Build to be fast, easy to use and lightweight (~3kb minified and gzipped)

Celebrate _right now_ at the [demo page](https://danielsneijers.github.io/canfetti/)

![Canfetti demo](/demo/canfetti-demo.gif?raw=true)

## Basic example

Using the code snippet below will render a full screen stream of confetti on a canvas.

```js
const Canfetti = require('./canfetti.js');
const myCanfetti = new Canfetti({ canvasId: 'some-canvas-id' });

myCanfetti.startStream();
```

## API

### Constructor Options

The Canfetti constructor (e.g. `new Canfetti()`) has the following options
| Option | Type | Default | Description |
|------------|--------|------------|------------------------------------------------------------|
| `canvasId` | string | 'canfetti' | ID of the canvas HTMLElement that will render the confetti |

### Instance methods

| Method       | Description                                                                  |
| ------------ | ---------------------------------------------------------------------------- |
| startStream  | Start a stream of confetti from the top of the screen                        |
| stopStream   | Stop the stream of confetti                                                  |
| toggleStream | Toggle between starting and stopping the stream of confetti                  |
| startBurst   | Adds listener for mouse clicks, generating a burst of confetti on each click |
| stopBurst    | Removes the listener for mouse clicks                                        |

### Chaining

Canfetti allow for chaining of methods, like this:

```js
const myCanfetti = new Canfetti();

myCanfetti.startStream().startBurst();
```

## License

MIT
