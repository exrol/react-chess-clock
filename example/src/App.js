import React from 'react'

import useChessClock from 'react-chess-clock'

const App = () => {

  const [whiteTimer, blackTimer, startTimer, activePlayer, toggleTimer, togglePause, resetTimer] = useChessClock()

  //Basic display
  return (
    <div>

      <p>Active Player : {activePlayer}</p>
      <br />
      <p>White timer : {whiteTimer}</p>
      <p>Black timer : {blackTimer}</p>
      <button onClick={() => toggleTimer()}>Toggle</button>
      <button onClick={() => resetTimer()}>Reset Timer</button>
      <button onClick={() => togglePause()}>Pause Timer</button>
      <button onClick={() => startTimer()}>Start</button>
    </div>
  )
}

export default App
