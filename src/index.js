import React, { useState, useEffect, useRef } from 'react'

// React chess clock hook
export default function useChessClock(initialTimer = 600, increment = 5) {

  const initialTime = initialTimer * 1000 // in ms

  //Player timers & statistics
  const [whiteTimer, setWhiteTimer] = useState(initialTime); // set time in milliseconds
  const [blackTimer, setBlackTimer] = useState(initialTime);
  const [whiteTurn, setWhiteTurn] = useState(0);
  const [blackTurn, setBlackTurn] = useState(0);

  //Clock logic
  const [activePlayer, setActivePlayer] = useState(null);
  const [pausedPlayer, setPausedPlayer] = useState(null)

  //State accessors
  const isClockActive = activePlayer !== null;
  const isGameOver = blackTimer <= 0 || whiteTimer <= 0

  const intervalRef = useRef(null)

  if (isGameOver && activePlayer !== null) {
    setActivePlayer(null)
  }

  //State setters
  const setActiveTimer = activePlayer === 'white' ? setWhiteTimer : setBlackTimer


  //Timer logic
  useEffect(() => {

    if (isClockActive) {
      intervalRef.current = setInterval(() => {
        setActiveTimer((timer) => timer - 10);
      }, 10);
    }

    return () => clearInterval(intervalRef.current);
  }, [activePlayer]);


  const startTimer = () => {
    if (isGameOver) {
      return
    }

    if (activePlayer !== null) {
      return;
    }

    setActivePlayer('white');
  }

  /**
   * (Toggling the clock if inactive, starts the timer for white player)
   */
  const toggleTimer = () => {
    if (isGameOver) {
      return
    }

    if (activePlayer === 'white') {
      setActivePlayer('black')
      setBlackTurn(blackTurn + 1)

    } else {
      setWhiteTurn(whiteTurn + 1);
      setActivePlayer('white')
    }
  }

  const togglePause = () => {
    if (isGameOver) {
      return
    }

    if (activePlayer) { //pause
      setPausedPlayer(activePlayer);
      setActivePlayer(null);
    } else { //unpause
      setActivePlayer(pausedPlayer);
      setPausedPlayer(null);
    }
  }

  /**
   * Reset the clock to initial state
   */
  const resetTimer = () => {

    setActivePlayer(null)

    clearInterval(intervalRef.current)
    intervalRef.current = null

    setBlackTimer(initialTime);
    setWhiteTimer(initialTime);
    setBlackTurn(0);
    setWhiteTurn(0);
  }

  //Format player informations
  const players = {
    white: {
      name: 'white',
      isActive: activePlayer == 'white',
      isPaused: pausedPlayer == 'white',
      timer: whiteTimer,
      turn: whiteTurn
    },
    black: {
      name: 'black',
      isActive: activePlayer == 'black',
      isPaused: pausedPlayer == 'black',
      timer: blackTimer,
      turn: blackTurn
    }
  }

  //Format clock informations, status & functions
  const clock = {
    activePlayer,
    isActive: isClockActive,
    isPaused: pausedPlayer !== null,
    start: startTimer,
    toggle: toggleTimer,
    pause: togglePause,
    reset: resetTimer
  }


  return [players, clock]

}