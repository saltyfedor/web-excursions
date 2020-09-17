import React, { Component } from 'react';
import { useDispatch } from 'react-redux';
import DateList from './DateList';
import store from '../../../../index';
import { addName, addId, loadBooked, changeSelected, resetSeat } from '../../../../Redux/Actions/index.js';


class DateMenu extends Component {
    constructor() {
        super();
        this.state = {
            dateMenuText: 'Выбрать дату',
            showDateMenu: false
        }
    }
   
    handleMenuClick = () => {
        this.setState({showDateMenu: !this.state.showDateList});
    };

    handleDateClick = (item) => {
        this.setState({
            dateMenuText: `${this.props.eTitle} - ${item.excDate}, свободных мест : ${item.maxCap - item.bookedSeats.length}`,
            showDateMenu: false,
        });
        store.dispatch(addName(this.props.eTitle));
        store.dispatch(addId(item.excId));
        store.dispatch(loadBooked(item.bookedSeats));
        store.dispatch(changeSelected(true))
        store.dispatch(resetSeat())
    };
    
    render() {
        return (
        <div className="mh2">
            <div className="measure center">
                <label htmlFor="title" className="f6 b db mb2">Экскурсия</label>
                <input id="title" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" value= {`${this.props.eTitle}, ${this.props.ePrice} / место`} readOnly/>
            </div>
            <div className="measure center">
                <label htmlFor="date" className="f6 b db mb2">Дата</label>
                <input id="date" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" value={this.state.dateMenuText} onClick = {this.handleMenuClick} readOnly/>
            </div>
            <div className="measure center">
                    {this.state.showDateMenu ? <DateList handleDateClick={this.handleDateClick} eTitle={this.props.eTitle}/> : null}    
            </div>            
        </div>         
     )      
    }
}

export default DateMenu;
