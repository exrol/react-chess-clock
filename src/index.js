import React, { useState, useEffect } from 'react'

// React chess clock hook
export default function useChessClock(initialTimer = 3, increment = 5) {

  //Player timers
  const [whiteTimer, setWhiteTimer] = useState(initialTimer * 1000); // set time in milliseconds
  const [blackTimer, setBlackTimer] = useState(initialTimer * 1000);

  //Clock logic
  const [activePlayer, setActivePlayer] = useState(null);
  const [pausedPlayer, setPausedPlayer] = useState(null)

  const isClockActive = activePlayer !== null;
  const setActiveTimer = activePlayer === 'white' ? setWhiteTimer : setBlackTimer
  const activeTimer = activePlayer === 'white' ? whiteTimer : blackTimer

  const isGameOver = blackTimer <= 0 || whiteTimer <= 0
  useEffect(() => {
    let interval;

    if (isClockActive && !isGameOver) {
      interval = setInterval(() => {
        setActiveTimer((timer) => timer - 10);
      }, 10);
    }

    return () => clearInterval(interval);
  }, [activePlayer]);

  const startTimer = () => {

    if (activePlayer !== null) {
      return;
    }

    setActivePlayer('white');
  }

  const toggleTimer = () => activePlayer === 'white' ? setActivePlayer('black') : setActivePlayer('white')

  const togglePause = () => {
    if (pausedPlayer) {
      setActivePlayer(pausedPlayer);
      setPausedPlayer(null);
    } else {
      setPausedPlayer(activePlayer);
      setActivePlayer(null);
    }
  }

  const resetTimer = () => {
    setActivePlayer(null)
    setBlackTimer(initialTimer * 1000);
    setWhiteTimer(initialTimer * 1000);
  }

  return [whiteTimer, blackTimer, startTimer, activePlayer, toggleTimer, togglePause, resetTimer]

}