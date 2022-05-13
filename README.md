# react-chess-clock

> Customisable React chess clock hook

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

  const [whiteTimer, blackTimer, toggleTimer, pauseTimer, resetTimer] = useChessClock()
     
  //Basic display
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

```

## License

MIT © [exrol](https://github.com/exrol)
