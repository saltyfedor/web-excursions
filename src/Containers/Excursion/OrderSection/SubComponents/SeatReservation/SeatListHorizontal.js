import React from 'react';
import store from '../../../../../index.js';
import { useSelector } from 'react-redux';
import './SeatListHorizontal.css'
import Seat from './Seat.js';

const SeatListHorizontal = () => {
    const booked = useSelector(state => state.excBooked);
    return (
    <div className="">
        <div className="mainHorizontal ba br4 measure pa2 bg-white">
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

export default SeatListHorizontal