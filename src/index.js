import React, { useState }  from 'react'

// React chess clock hook
export default function useChessClock (initialTimer = 600, initialIncrement = 0){
  
    // Clock state
    const [timer, setTimer] = useState(initialTimer);
    const [increment, setIncrement] = useState(initialIncrement);

    //Player timers
    const [whiteTimer, setwhiteTimer] = useState(initialTimer);
    const [blackTimer, setBlackTimer] = useState(initialTimer);

    //Utils functions
    const toggleTimer = () => console.log('toggle')
    const pauseTimer = () => console.log('toggle')
    const resetTimer = () => console.log('reset')
    
    return [whiteTimer, blackTimer, toggleTimer, pauseTimer, resetTimer]

}