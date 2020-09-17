import React from 'react';
import {useSelector} from 'react-redux'
import './SeatListVertical.css'

import Seat from './Seat.js';

const SeatList = () => { 
    const booked = useSelector(state => state.excBooked);
    return (
    <div className="mv2 ph4 flex justify-center">
        <div className="mainVertical ba br4 measure center pa2">
            <Seat id='A1' bookedList={booked} />
            <Seat id='A2' bookedList={booked} />
            <Seat id='GID' bookedList={booked} />
            <Seat id='B1' bookedList={booked} />
            <Seat id='B2' bookedList={booked} />
            <Seat id='B3' bookedList={booked} />
            <Seat id='C1' bookedList={booked} />
            <Seat id='C2' bookedList={booked} />
            <Seat id='C3' bookedList={booked} />
            <Seat id='D1' bookedList={booked} />
            <Seat id='D2' bookedList={booked} />
            <Seat id='D3' bookedList={booked} />
            <Seat id='E1' bookedList={booked} />
            <Seat id='E2' bookedList={booked} />
            <Seat id='E3' bookedList={booked} />
            <Seat id='F1' bookedList={booked} />
            <Seat id='F2' bookedList={booked} />
            <Seat id='F3' bookedList={booked} />
            <Seat id='F4' bookedList={booked} />
        </div>
    </div>
    )
}

export default SeatList