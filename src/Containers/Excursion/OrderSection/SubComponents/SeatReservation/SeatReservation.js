import React, {useState, useEffect} from 'react'
import SeatListVertical from './SeatListVertical.js'
import SeatListHorizontal from './SeatListHorizontal.js'
import '../input.css';

const SeatReservation = () => {
    const [windowSize, updateWindowSize] = useState(window.innerWidth);
  
    if (windowSize < 800) {
        return (
            <SeatListVertical />
        )
    } else {
        return (
            <SeatListHorizontal />
        )

    }
}

export default SeatReservation;