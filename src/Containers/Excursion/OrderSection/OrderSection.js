import React from 'react';
import OrderInput from './SubComponents/OrderInput.js'
import DateMenu from './SubComponents/DateMenu.js'
import SeatReservation from './SubComponents/SeatReservation/SeatReservation.js';
import OrderButton from './OrderButton.js';
import { useSelector } from 'react-redux';
import './OrderForm.css'

const OrderForm = ({ eTitle, ePrice }) => {
    const status = useSelector( state => state.isDateSelected) 
    return (           
        <div className="pt3 pb3 black-80 container1">
            <DateMenu eTitle={eTitle} ePrice={ePrice}/>   
            <OrderInput />
            {status ? <SeatReservation /> : null}
           
        </div>                
        );        
    
}

export default OrderForm;