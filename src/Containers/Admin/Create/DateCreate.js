import React, { Component, useState } from 'react';
import ExcursionPickerList from './ExcursionPickerList';
import { useLocation } from 'react-router-dom';

class DateCreate extends Component {
    constructor(props) { 
        super(props)
        this.state = {
            label: "Выбрать Экскурсию",
            showExcursions: false,
            mainId: 0,
            newDate: '',            
        }
    }
   
    handlePickClick = () => {  
        this.setState({ showExcursions: true })        
    }

    handleItemClick = (item) => {
        this.setState(Object.assign(this.state, { mainId: item.mainId }))
        this.setState(Object.assign(this.state, { label: item.excTitle }))
        this.setState(Object.assign(this.state, { showExcursions: false }))
    }

    handleDateInput = (event) => {
        this.setState(Object.assign(this.state = { newDate: event.target.value }))
    }

    handleCreateClick = () => {
        console.log(this.state)
    }
    
    render() {
        return (
            <div className="flex justify-center">
                <div className="ma3 flex flex-column">
                    <h2>Создать Дату</h2>
                    <div className="dib">
                        <label htmlFor="name" className="f6 b db mb2">Экскурсия<span className="normal black-60"></span></label>
                        <input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" value={this.state.label} onClick={this.handlePickClick} />
                    </div>
                    <div>
                        {this.state.showExcursions ? <ExcursionPickerList list={this.props.location.state.list} handleClick={this.handleItemClick} /> : null}
                    </div>
                    <div className="dib">
                        <label htmlFor="date" className="f6 b db mb2">Дата<span className="normal black-60"></span></label>
                        <input id="date" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="date" onChange={this.handleDateInput}/>
                    </div>
                    <div>
                        <button className="" onClick={this.handleCreateClick}>Создать</button>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default DateCreate;





            