import React from 'react'
import store from '../../../../index';
import { addFirstName, addLastName, addPhone, addEmail } from '../../../../Redux/Actions/index.js';

const OrderInput = () => {    

    const handleInputNameChange = (event) => {
        const value = event.target.value;
        store.dispatch(addFirstName(value));
    }
    const handleInputLastNameChange = (event) => {
        const value = event.target.value;
        store.dispatch(addLastName(value));
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
        <div className="mh2">
        <div className="measure center">
            <label htmlFor="name" className="f6 b db mb2">Имя<span className="normal black-60"></span></label>
            <input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc"  onChange={handleInputNameChange}/>
        </div>
        <div className="measure center">
            <label htmlFor="surname" className="f6 b db mb2">Фамилия<span className="normal black-60"></span></label>
            <input id="surname" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" onChange={handleInputLastNameChange}/>
        </div>
        <div className="measure center">
            <label htmlFor="email" className="f6 b db mb2">Эл. почта<span className="normal black-60"></span></label>
            <input id="email" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="email" aria-describedby="name-desc" onChange={handleInputEmailChange}/>
        </div>
        <div className="measure center">
            <label htmlFor="phone" className="f6 b db mb2">Номер Телефона<span className="normal black-60"></span></label>
            <input id="phone" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" rows="15" aria-describedby="name-desc" onChange={handleInputPhoneChange}/>
        </div>       
    </div>
    );
    
}

export default OrderInput;