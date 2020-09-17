import React from 'react'
import store from '../../../../../index';
import { addSeat, removeSeat } from '../../../../../Redux/Actions/index.js';
import { useSelector } from 'react-redux'

const Seat = (props) => {
    const orderedSeats = useSelector(state => state.orderSeats);
    
    const handleSeatClick = () => {
        if (!orderedSeats.includes(props.id)) {                       
            store.dispatch(addSeat(props.id));
        } else if (orderedSeats.includes(props.id)) {           
            store.dispatch(removeSeat(props.id));
        }
    }
        
    if (props.id === 'GID') {   return (
        <div
            className={`ba br4 flex justify-center items-center ${props.id}`}
            style={{
                backgroundColor: '#FF45',                  
            }}
        >
            <p className="f6"> {props.id} </p>
        </div>
    ) }

        if (props.bookedList.includes(props.id)) {
                return (
                    <div
                        className={`ba br4 flex justify-center items-center ${props.id}`}
                        style={{
                            backgroundColor: '#FF4500',                  
                        }}
                    >
                        <p className="f6"> {props.id} </p>
                    </div>
                )
            }
        else if (!props.bookedList.includes(props.id)) {
                if (!orderedSeats.includes(props.id)) {
                    return (
                        <div
                            className={`ba br4 flex justify-center items-center ${props.id}`}
                            style={{
                                backgroundColor: '#FFF',
                            }}
                            onClick={handleSeatClick}
                        >
                            <p className="f6"> {props.id} </p>
                        </div>
                    )
                }
                else if (orderedSeats.includes(props.id)) {
                    return (
                        <div
                            className={`ba br4 flex justify-center items-center ${props.id}`}
                            style={{
                                backgroundColor: '	#00FF00',
                                }}                    
                            onClick={handleSeatClick}
                        >
                            <p className="f6"> {props.id} </p>
                        </div>
                    )
                }
        }
         
};


export default Seat;