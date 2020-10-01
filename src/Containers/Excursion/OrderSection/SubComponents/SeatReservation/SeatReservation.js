import React, {Component} from 'react'
import SeatListVertical from './SeatListVertical.js'
import SeatListHorizontal from './SeatListHorizontal.js'
import '../input.css';

class seatReservation extends Component{
    constructor() {
        super();
        this.state = {
            showReservation: true,
            windowSize: 0
        };
    }

    handleSelectClick = () => {
        this.setState({ showReservation: true });
    }
    componentDidMount() {       
        this.setState({ windowSize: window.innerWidth })        
    }

    render() { 
        if (this.state.windowSize < 800) {
            return (
                <div>                  
                    {this.state.showReservation ? <div><SeatListVertical /></div> : null}                    
                </div>
            )
        } else {
            return (
                <div>                 
                    {this.state.showReservation ? <div> <SeatListHorizontal /></div> : null}
                </div>
            )
        }

    }

}

export default seatReservation;