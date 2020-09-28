import React, {Component} from 'react'
import SeatListVertical from './SeatListVertical.js'
import SeatListHorizontal from './SeatListHorizontal.js'


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
                <div className = "mh2">
                    <div className="measure center">
                        <label htmlFor="place" className="f6 b db mb2">Место<span className="normal black-60"></span></label>
                        <input id="place" className="input-reset ba b--black-20 pa2 mb3 db w-100" type="text" aria-describedby="name-desc" value="Выбрать место" readOnly onClick={this.handleSelectClick} />
                    </div>
                    {this.state.showReservation ? <div><SeatListVertical /></div> : null}
                    
                </div>
            )
        } else {
            return (
                <div>
                    <div className="measure center">
                        <label htmlFor="place" className="f6 b db mb2">Место<span className="normal black-60"></span></label>
                        <input id="place" className="input-reset ba b--black-20 pa2 mb3 db w-100" type="text" aria-describedby="name-desc" value="Выбрать место" readOnly onClick={this.handleSelectClick} />
                    </div>
                    {this.state.showReservation ? <div> <SeatListHorizontal /></div> : null}
                </div>
            )
        }

    }

}

export default seatReservation;