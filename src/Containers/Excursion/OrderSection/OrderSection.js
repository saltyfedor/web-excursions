import React from 'react';
import OrderInput from './SubComponents/OrderInput.js'
import SeatReservation from './SubComponents/SeatReservation/SeatReservation.js';
import Payment from '../Payment/Payment.js';
import './OrderForm.css'

const OrderForm = () => {
   
    
    return (           
        <div className="container1 center ba br4 bg-black shadow">
            <OrderInput />
            <SeatReservation />
            <Payment />
        </div>                
        );        
    
}

export default OrderForm;