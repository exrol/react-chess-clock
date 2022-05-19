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

  const [players, clock] = useChessClock()

  const {white, black} = players;
  const {isActive, isPaused} = clock;

  //Basic display
  return (
    <div>

    </div>
  )
}

export default App

```

## License

MIT © [exrol](https://github.com/exrol)
