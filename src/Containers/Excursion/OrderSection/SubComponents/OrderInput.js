import React from 'react'
import store from '../../../../index';
import './input.css'
import { addFirstName, addPhone, addEmail } from '../../../../Redux/Actions/index.js';

const OrderInput = () => {    

    const handleInputNameChange = (event) => {
        const value = event.target.value;
        store.dispatch(addFirstName(value));
    }  
    const handleInputEmailChange = (event) => {
        const value = event.target.value;
        store.dispatch(addEmail(value));
    }
    const handleInputPhoneChange = (event) => {
        const value = event.target.value;
        store.dispatch(addPhone(value));       
    }
 
    return(
        <div className="">
        <p className="f2 b tc white">Купить Экскурсию</p>    
        <div className="field center">
            <label htmlFor="name" className="f6 b db mb2 white">Имя<span className="normal black-60"></span></label>
            <input id="name" className="input-reset ba b--white-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc"  onChange={handleInputNameChange}/>
        </div>     
        <div className="field center">
            <label htmlFor="email" className="f6 b db mb2 white">Эл. почта<span className="normal black-60"></span></label>
            <input id="email" className="input-reset ba b--white-20 pa2 mb2 db w-100" type="email" aria-describedby="name-desc" onChange={handleInputEmailChange}/>
        </div>
        <div className="field center">
            <label htmlFor="phone" className="f6 b db mb2 white">Номер телефона<span className="normal black-60"></span></label>
            <input id="phone" className="input-reset ba b--white-20 pa2 mb2 db w-100" type="text" rows="15" aria-describedby="name-desc" onChange={handleInputPhoneChange}/>
        </div>
        <div className="field center">
            <label htmlFor="place" className="f6 b db mb3 white">Место в автобусе :<span className="normal black-60"></span></label>            
        </div>    
    </div>
    );
    
}

export default OrderInput;