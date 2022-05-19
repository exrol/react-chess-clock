# react-chess-clock

> React chess clock hook provides players informations & clock status to let you build the chess clock interface you want.

[![NPM](https://img.shields.io/npm/v/react-chess-clock.svg)](https://www.npmjs.com/package/react-chess-clock) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-chess-clock
```

## Usage

```jsx
import React from 'react'

import useChessClock from 'react-chess-clock'

const App = () => {

  const initialTimer = 2
  const increment = 5

  const [players, clock] = useChessClock(initialTimer, increment)

  const {
    white,
    black
  } = players;

  const {
    activePlayer,
    isActive,
    isPaused,
    start,
    toggle,
    pause,
    reset
  } = clock;

  return (
    <div>

      <p>Initial timer : {initialTimer}</p>
      <p>Increment : {increment}</p>
      <p>Active Player : {activePlayer ?? 'none'}</p>
      <p>White player turns : {white.turn}</p>
      <p>Black player turns : {black.turn}</p>
      <p>White timer : {white.timer}</p>
      <p>Black timer : {black.timer}</p>

      <button onClick={() => toggle()}>Toggle</button>
      <button onClick={() => reset()}>Reset Timer</button>
      <button onClick={() => pause()}>Pause Timer</button>
      <button onClick={() => start()}>Start</button>
    </div>
  )
}

export default App

```

### Players

> Players object provides you informations about white and black player

```js
players = {
    white: {
      name,
      isActive,
      isPaused,
      timer,
      turn
    },
    black: {
      name,
      isActive,
      isPaused,
      timer,
      turn
    }
  }
  ```

### Clock

>  Clock object provides you informations about clock status & functions to interact with the clock

```js
clock = {
    //Informations
    activePlayer
    isActive
    isPaused

    //Functions
    start
    toggle
    pause
    reset
  }
```

## License

MIT © [exrol](https://github.com/exrol)
