import React from 'react'
import { loadStripe } from "@stripe/stripe-js";
import { useSelector } from 'react-redux';

const stripePromise = loadStripe("pk_test_51HcYc4FbotLHFPNbsBOxWUzuYYIE5XWzq33x8AVswNuUh8GimMAHNe41eBfciNbkzKpM06m3Teh0x2xnFoiRLiPt00hmUf8XJL");


const PayPal = () => { 
  const id = useSelector(state => state.excurisonId)
  const name = useSelector(state => state.orderFirstName)
  const email = useSelector(state => state.orderEmail)
  const phoneNumber = useSelector(state => state.orderPhone)
  const seats = useSelector(state => state.orderSeats)


  const placeOrder = async (event) => {    
    const stripe = await stripePromise;
    const response = await fetch("http://localhost:3001/create-session", {
      method: "POST",
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify(
        {
          excursionId: id,
          name: name,
          phone: phoneNumber,
          email: email,
          seats: seats,
          url: window.location.href
        } 
      )
    });
    const session = await response.json();
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    })
    
  }

  const handleClick = (event) => {
    if (name && phoneNumber && email && seats.length > 0) {
      placeOrder(event);
    }
    else {
      window.alert("Пожалуйста, заполните все поля и выберете места в автобусе!")
    }
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