import React from 'react'

const Customer = (props) => {
    const id = props.customer.id 
    return (
        <div className = "db">
        <div>
            <p>Name: {props.customer.name} Id: {props.customer.id} Seats: {props.customer.seats}</p>
        </div>
        <div className = "ml-auto">
                <button onClick={
                () => {
                   props.handleRemoveClick(id)
                }
                }>Remove</button>
        </div>
        </div>            
    )
}
 
export default Customer;