import React from 'react'
import { loadStripe } from "@stripe/stripe-js";
import { useSelector } from 'react-redux';

const stripePromise = loadStripe("pk_test_51HcYc4FbotLHFPNbsBOxWUzuYYIE5XWzq33x8AVswNuUh8GimMAHNe41eBfciNbkzKpM06m3Teh0x2xnFoiRLiPt00hmUf8XJL");


const PayPal = () => { 
  const id = useSelector(state => state.excusrionId)
  const name = useSelector(state => state.orderFirstName)
  const email = useSelector(state => state.orderEmail)
  const phoneNumber = useSelector(state => state.orderPhone)
  const seats = useSelector(state => state.orderSeats)


  const handleClick = async (event) => {
    const stripe = await stripePromise;

    const order = {
      excusrionId: id,
      name: name,
      phone: phoneNumber,
      email: email,
      seats: seats,
    }

    console.log(order)

    const response = await fetch("http://localhost:3001/create-session", {
      method: "POST",
    });
    const session = await response.json();
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });
    
  }

    return (        
        <div>        
        <button
          id="checkout-button"
          role="link"
          onClick={handleClick}>
              Checkout
          </button>
        </div>
    );
}

export default PayPal