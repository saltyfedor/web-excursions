import React from 'react';
import OrderInput from './SubComponents/OrderInput.js'
import DateMenu from './SubComponents/DateMenu.js'
import SeatReservation from './SubComponents/SeatReservation/SeatReservation.js';
import './OrderForm.css'

const OrderForm = ({ eTitle, ePrice }) => {
   
    
    return (           
        <div className="pb3 black-80 container1">
            <DateMenu eTitle={eTitle} ePrice={ePrice}/>   
            <OrderInput />
            <SeatReservation />           
        </div>                
        );        
    
}

export default OrderForm;