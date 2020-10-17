import React from 'react'
import PayPal from './PayPal.js';

const Payment = () => {
    
    const paymentHandler = (details, data) => {
        /** Here you can call your backend API
          endpoint and update the database */
        console.log(details, data);
      }

    return (
    <div className="center mt2">         
            <PayPal  amount = {200}
                    currency = {'CZK'}
                    onSuccess={paymentHandler} />      
    </div>         
    )

}

export default Payment