import React from 'react'

import useChessClock from 'react-chess-clock'

const App = () => {

  const [whiteTimer, blackTimer, toggleTimer, pauseTimer, resetTimer] = useChessClock()
     
  //Display for example
  return (
      <div>
          <p>White timer : {whiteTimer}</p>
          <p>Black timer : {whiteTimer}</p>
          <button onClick={() => toggleTimer()}>Toggle</button>
          <button onClick={() => resetTimer()}>Reset Timer</button>       
          <button onClick={() => pauseTimer()}>Pause Timer</button>          
      </div>
  )
}

export default App
