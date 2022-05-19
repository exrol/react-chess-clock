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
    reset, } = clock;

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
